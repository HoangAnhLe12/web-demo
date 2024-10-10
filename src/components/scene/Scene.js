import { MathUtils } from 'three';
import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';

import Dome from './Dome';
import Controls from './Controls';

function Scene() {
   const cameraRef = useRef();

   // Hàm xử lý sự kiện cuộn chuột
   const handleWheel = (event) => {
      if (cameraRef.current) {
         // Lấy camera từ ref và thay đổi fov
         const camera = cameraRef.current;
         const newFov = MathUtils.clamp(camera.fov + event.deltaY * 0.05, 30, 75);
         camera.fov = newFov;

         // Cập nhật lại ma trận chiếu của camera
         camera.updateProjectionMatrix();
      }
   };

   return (
      <Canvas
         onWheel={handleWheel} // Gắn sự kiện cuộn chuột vào Canvas để thay đổi fov
      >
         <PerspectiveCamera
            ref={cameraRef}
            makeDefault
            fov={75}
            aspect={window.innerWidth / window.innerHeight}
            near={1}
            far={1100}
            position={[0, 0, 5]}
         />
         <Controls
            enableZoom={false}
            enablePan={false}
            enableDamping
            dampingFactor={0.2}
            autoRotate={false}
            rotateSpeed={-0.1}
         />
         <Suspense fallback={null}>
            <Dome />
         </Suspense>
      </Canvas>
   );
}

export default Scene;
