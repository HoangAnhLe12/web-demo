import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import Dome from './Dome';
import Controls from './Controls';

function Scene() {
   return (
      <Canvas camera={{ position: [0, 0, 0.1] }}>
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
