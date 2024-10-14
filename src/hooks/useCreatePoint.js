// useClickHandler.js
import { useCallback, useRef } from 'react';
import * as THREE from 'three';

const useCreatePoint = (camera, scene, data, setData, which) => {
   const raycasterRef = useRef(new THREE.Raycaster());
   const mouseRef = useRef(new THREE.Vector2());

   return useCallback(
      (event) => {
         const raycaster = raycasterRef.current;
         const mouse = mouseRef.current;

         // Cập nhật vị trí chuột
         mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
         mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

         // Cập nhật raycaster
         raycaster.setFromCamera(mouse, camera);
         const intersects = raycaster.intersectObjects(scene.children);

         if (intersects.length > 0) {
            const intersectedPoint = intersects[0].point;

            // Cập nhật dữ liệu
            const newData = data.map((entry, index) => {
               if (index === which) {
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

            setData(newData);
            console.log('Điểm đã chọn: ', intersectedPoint);
         }
      },
      [camera, scene, data, setData, which],
   );
};

export default useCreatePoint;
