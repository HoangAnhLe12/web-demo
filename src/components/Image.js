import * as THREE from 'three';
import { Suspense, useRef, useState, useCallback, useEffect } from 'react';
import { BackSide, TextureLoader } from 'three';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';

function Dome() {
   // Sử dụng useRef để lưu trữ tham chiếu của mesh
   const meshRef = useRef();

   // Sử dụng useLoader để tải ảnh texture
   const texture = useLoader(TextureLoader, '/img/8f704e6f7487d15ce979aeca4f4dfea43349ab4b_2_690x343.jpeg');

   // Quản lý state
   const [active, setActive] = useState(false);
   const [lon, setLon] = useState(0);
   const [lat, setLat] = useState(0);
   const [pointerDown, setPointerDown] = useState({ mouseX: 0, mouseY: 0, lon: 0, lat: 0 });

   // Các hàm điều khiển sử dụng useCallback để tránh render lại không cần thiết
   const onPointerDown = useCallback(
      (event) => {
         if (!event.isPrimary) return;
         setActive(true);
         setPointerDown({
            mouseX: event.clientX,
            mouseY: event.clientY,
            lon: lon,
            lat: lat,
         });
      },
      [lon, lat],
   );

   const onPointerMove = useCallback(
      (event) => {
         if (!event.isPrimary || !active) return;

         // Tính toán lon và lat mới dựa trên vị trí con trỏ
         const newLon = pointerDown.lon + (pointerDown.mouseX - event.clientX) * 0.1;
         const newLat = pointerDown.lat + (event.clientY - pointerDown.mouseY) * 0.1;

         // Cập nhật state ngay lập tức và giới hạn góc lat
         setLon(newLon);
         setLat((prev) => Math.max(-85, Math.min(85, newLat))); // Giới hạn góc lat để không lật ảnh
      },
      [active, pointerDown],
   );

   const onPointerUp = useCallback(() => {
      setActive(false);
   }, []);

   // Lấy camera từ useThree
   const { camera, invalidate } = useThree();

   // Tối ưu sự kiện onWheel bằng cách sử dụng callback
   const onWheel = useCallback(
      (event) => {
         const newFov = camera.fov + event.deltaY * 0.05;
         camera.fov = THREE.MathUtils.clamp(newFov, 10, 75); // Giới hạn FOV để tránh distortion quá mức
         camera.updateProjectionMatrix();
         invalidate(); // Yêu cầu cập nhật khung hình khi camera thay đổi
      },
      [camera, invalidate],
   );

   // useFrame để cập nhật lon tự động khi không tương tác
   useFrame(() => {
      if (!active) {
         setLon((prevLon) => prevLon + 0.1); // Tự động xoay khi không tương tác
      }
      // Chuyển đổi lon và lat sang phi và theta để tính toán tọa độ
      const phi = THREE.MathUtils.degToRad(90 - lat);
      const theta = THREE.MathUtils.degToRad(lon);

      // Tính toán vị trí camera
      const x = 500 * Math.sin(phi) * Math.cos(theta);
      const y = 500 * Math.cos(phi);
      const z = 500 * Math.sin(phi) * Math.sin(theta);

      // Cập nhật vị trí nhìn của camera
      camera.lookAt(x, y, z);
   });

   return (
      <mesh
         ref={meshRef}
         onPointerDown={onPointerDown}
         onPointerMove={onPointerMove}
         onPointerUp={onPointerUp}
         onWheel={onWheel}
      >
         <sphereGeometry args={[500, 60, 40]} />
         <meshBasicMaterial map={texture} side={BackSide} />
      </mesh>
   );
}

// Thành phần ResizeHandler để xử lý sự thay đổi kích thước
function ResizeHandler() {
   const { size, camera, gl } = useThree();

   useEffect(() => {
      camera.aspect = size.width / size.height;
      camera.updateProjectionMatrix();
      gl.setSize(size.width, size.height);
   }, [size, camera, gl]);

   return null;
}

export default function App() {
   const aspect = window.innerWidth / window.innerHeight;

   return (
      <Canvas
         frameloop="demand" // Chỉ cập nhật khung hình khi có sự thay đổi (tối ưu hiệu năng)
         camera={{ position: [0, 0, 0], far: 1100, near: 1, fov: 75, aspect: aspect }}
         onCreated={({ gl }) => {
            gl.setPixelRatio(window.devicePixelRatio); // Thiết lập pixel ratio để tối ưu chất lượng hiển thị
         }}
      >
         <ResizeHandler />
         <Suspense fallback={null}>
            <Dome />
         </Suspense>
      </Canvas>
   );
}

// const store = [
//    { name: 'inside', color: 'lightblue', position: [15, 0, 0], url: '/img/2294472375_24a3b8ef46_o.jpg', link: 0 },
// ];

// function Portals() {
//    const [which, set] = useState(0);
//    const { link, ...props } = store[which];
//    const maps = useLoader(
//       TextureLoader,
//       store.map((entry) => entry.url),
//    );
//    return <Dome onClick={() => set(link)} {...props} texture={maps[which]} />;
// }
