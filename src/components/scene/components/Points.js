import { useState } from 'react';
import { Html } from '@react-three/drei';
import { Tooltip } from 'antd';
// import InfoDrawer from '../Drawer/Drawer';
import InfoModal from '../../Modal/Modal';

function Point({ type, data, position, onClick }) {
   const [hovered, setHovered] = useState(false);
   const [open, setOpen] = useState(false);
   const onClose = () => {
      setOpen(false);
   };

   const typeData = type === 'popup';
   const handleMouseClick = () => {
      if (typeData) {
         setOpen(true);
      } else {
         onClick();
      }
   };

   return (
      <group>
         <mesh
            scale={[1.5, 1.5, 1.5]}
            position={position}
            onClick={handleMouseClick}
            onPointerOver={() => {
               setHovered(true);
               document.body.style.cursor = 'pointer';
            }}
            onPointerOut={() => setHovered(false)}
         >
            <sphereGeometry args={[5, 16, 16]} />
            <meshBasicMaterial color="red" opacity={0.7} />
            {hovered && (
               <Html center>
                  <Tooltip title={data.title} color="blue" background="none" open={hovered}>
                     <div style={{ width: '0px', height: '0px' }} />
                  </Tooltip>
               </Html>
            )}
         </mesh>

         {/* Sử dụng InfoDrawer */}
         <Html>
            {/* <InfoDrawer open={open} onClose={onClose} data={data} /> */}
            <InfoModal open={open} onClose={onClose} data={data} />
         </Html>
      </group>
   );
}

export default Point;
