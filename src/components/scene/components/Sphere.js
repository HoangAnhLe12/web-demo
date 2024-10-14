// Sphere.jsx
import { BackSide } from 'three';

function Sphere({ map, args, onDoubleClick }) {
   return (
      <mesh onDoubleClick={onDoubleClick}>
         <sphereGeometry attach="geometry" args={args} />
         <meshBasicMaterial attach="material" map={map} side={BackSide} />
      </mesh>
   );
}

export default Sphere;
