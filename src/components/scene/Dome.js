import * as THREE from 'three';
import { useState, useRef } from 'react';
import { useLoader, useThree } from '@react-three/fiber';
import images from '../../assets/images';

// import Portals from '../Portals';

const data = [
   {
      portals: [
         {
            position: [10, 0, -15],
            id: 1,
         },
      ],
      url: images.house,
      id: 0,
   },
   {
      portals: [
         {
            position: [15, 0, 0],
            id: 0,
         },
         {
            position: [-15, 0, 0],
            id: 2,
         },
      ],
      url: images.outside,
      id: 1,
   },
   {
      portals: [
         {
            position: [10, 0, -15],
            id: 0,
         },
      ],
      url: images.snow,
      id: 2,
   },
];

const radius = 500;

// Tạo một điểm tại tọa độ tính toán sẵn (theta = π/4, phi = π/4)
const pointPosition = [
   498.2310375663341,

   16.791770205834336,

   -21.165189931694698,
];

function Point({ position, onClick }) {
   return (
      <mesh position={position} onClick={onClick}>
         {/* Tạo một mesh hình cầu nhỏ tại vị trí xác định */}
         <sphereGeometry args={[5, 16, 16]} />
         <meshBasicMaterial color="red" />
      </mesh>
   );
}

function Dome() {
   const [which, set] = useState(0);
   const maps = useLoader(
      THREE.TextureLoader,
      data.map((entry) => entry.url),
   );
   //Test
   const meshRef = useRef();
   const { camera, scene } = useThree();

   // Tạo raycaster để tìm vị trí trên vòm
   const raycaster = new THREE.Raycaster();
   const mouse = new THREE.Vector2();

   const handleMouseClick = (event) => {
      // Lấy vị trí chuột
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Cập nhật raycaster
      raycaster.setFromCamera(mouse, camera);

      // Kiểm tra các đối tượng mà raycaster đã chạm tới
      const intersects = raycaster.intersectObjects(scene.children);

      if (intersects.length > 0) {
         const intersectedPoint = intersects[0].point;
         console.log('Điểm đã chọn: ', intersectedPoint);
      }
   };

   return (
      <group>
         <mesh ref={meshRef} onDoubleClick={handleMouseClick}>
            <sphereGeometry attach="geometry" args={[radius, 60, 40]} />
            <meshBasicMaterial attach="material" map={maps[which]} side={THREE.BackSide} />
         </mesh>
         {/* {data[which].portals.map((portal, index) => (
            <Portals key={index} position={portal.position} onClick={() => set(portal.id)} />
         ))} */}
         <Point position={pointPosition} onClick={() => alert('Chuyển sang cảnh khác')} />
      </group>
   );
}
export default Dome;
