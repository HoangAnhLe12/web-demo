import React, { useRef } from 'react';
import { extend, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { MathUtils } from 'three';

extend({ OrbitControls });

export default function Controls(props) {
   const { camera, gl } = useThree();
   const ref = useRef();
   useFrame(() => ref.current.update());
   return <orbitControls ref={ref} target={[0, 0, 0]} {...props} args={[camera, gl.domElement]} />;
}

// Hàm xử lý sự kiện cuộn chuột
export const handleWheel = (event, isZoom, cameraRef) => {
   if (isZoom && cameraRef) {
      // Lấy camera từ ref và thay đổi fov
      const camera = cameraRef;
      const newFov = MathUtils.clamp(camera.fov + event.deltaY * 0.05, 30, 75);
      camera.fov = newFov;

      // Cập nhật lại ma trận chiếu của camera
      camera.updateProjectionMatrix();
   }
};
