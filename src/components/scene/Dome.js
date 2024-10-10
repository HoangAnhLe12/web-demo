import * as THREE from 'three';
import { useState, useRef } from 'react';
import { useLoader, useThree } from '@react-three/fiber';

import Point from '../Points';
import { initialData } from '../Data';

const radius = 500;

function Dome() {
   // Quản lý state của `data` và scene hiện tại
   const [data, setData] = useState(initialData);
   const [which, set] = useState(0);
   const maps = useLoader(
      THREE.TextureLoader,
      data.map((entry) => entry.url),
   );
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

         // Thêm điểm mới vào dữ liệu trong state
         const newData = data.map((entry, index) => {
            if (index === which) {
               // Thêm điểm mới vào đối tượng 'points' của scene hiện tại
               return {
                  ...entry,
                  points: [
                     ...entry.points,
                     {
                        type: 'gate',
                        position: [intersectedPoint.x, intersectedPoint.y, intersectedPoint.z],
                        data: {
                           title: 'outside',
                           id: 1,
                        },
                     },
                  ],
               };
            }
            return entry;
         });

         // Cập nhật state với data mới
         setData(newData);

         console.log('Điểm đã chọn: ', intersectedPoint);
      }
   };

   return (
      <group>
         <mesh ref={meshRef} onDoubleClick={handleMouseClick}>
            <sphereGeometry attach="geometry" args={[radius, 60, 40]} />
            <meshBasicMaterial attach="material" map={maps[which]} side={THREE.BackSide} />
         </mesh>
         {data[which].points.map((point, index) => (
            <Point
               key={index}
               position={point.position}
               type={point.type}
               data={point.data}
               onClick={() => set(point.data.id)}
            />
         ))}
      </group>
   );
}
export default Dome;
