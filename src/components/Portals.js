import { DragControls } from '@react-three/drei';
import { useRef } from 'react';

function Portals({ position, onClick }) {
   const portalRef = useRef();
   return (
      <DragControls>
         <mesh ref={portalRef} position={position}>
            <sphereGeometry args={[1.25, 32, 32]} />
            <meshBasicMaterial color="white" />
         </mesh>
      </DragControls>
   );
}

export default Portals;
