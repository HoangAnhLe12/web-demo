import { useState } from 'react';
import { Html } from '@react-three/drei';
import { Tooltip } from 'antd';

function Point({ type, data, position, onClick }) {
   const [hovered, setHovered] = useState(false);
   const typeData = type === 'popup';
   const handleMouseClick = () => {
      if (typeData) {
         console.log('popup');
      } else {
         onClick();
      }
   };
   return (
      <mesh
         scale={[1.5, 1.5, 1.5]}
         position={position}
         onClick={handleMouseClick}
         onPointerOver={() => setHovered(true)}
         onPointerOut={() => setHovered(false)}
      >
         <sphereGeometry args={[5, 16, 16]} />
         <meshBasicMaterial color="red" opacity={0.7} />
         {hovered && (
            <Html center>
               <Tooltip title={data.title} color="transparent" background="none" open={hovered}>
                  <div style={{ width: '0px', height: '0px' }} />
               </Tooltip>
            </Html>
         )}
      </mesh>
   );
}

export default Point;
