import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';

import Dome from './Dome';
import Controls, { handleWheel } from './Controls';
import { initialData } from '../Data';
// import useFetch from '../../hooks/useFetch';

function Scene() {
   // const { data, loading, error } = useFetch('http://localhost:3001/images');
   const cameraRef = useRef();
   const data = initialData;

   // if (loading) return <p>Loading...</p>;
   // if (error) return <p>Error: {error.message}</p>;
   const radius = 500;
   const widthSegments = 60;
   const heightSegments = 40;

   const isZoom = true;

   const onWheel = (event) => handleWheel(event, isZoom, cameraRef.current);

   return (
      <Canvas
         onWheel={onWheel} // Gắn sự kiện cuộn chuột vào Canvas để thay đổi fov
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
            <Dome initialData={data} args={[radius, widthSegments, heightSegments]} />
         </Suspense>
      </Canvas>
   );
}

export default Scene;
