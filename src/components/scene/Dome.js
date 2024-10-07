import { TextureLoader, BackSide } from 'three';
import { useState } from 'react';
import { useLoader } from '@react-three/fiber';

import Portals from '../Portals';

const data = [
   {
      portals: [
         {
            position: [10, 0, -15],
            id: 1,
         },
      ],
      url: '/img/2294472375_24a3b8ef46_o.jpg',
      id: 0,
   },
   {
      portals: [
         {
            position: [15, 0, 0],
            id: 0,
         },
         {
            position: [-15, 0, 0],
            id: 2,
         },
      ],
      url: '/img/Photosphere1.jpg',
      id: 1,
   },
   {
      portals: [
         {
            position: [10, 0, -15],
            id: 0,
         },
      ],
      url: '/img/bryan-goff-IuyhXAia8EA-unsplash.jpg',
      id: 2,
   },
];

function Dome() {
   const [which, set] = useState(0);
   const maps = useLoader(
      TextureLoader,
      data.map((entry) => entry.url),
   );
   return (
      <group>
         <mesh>
            <sphereGeometry attach="geometry" args={[500, 60, 40]} />
            <meshBasicMaterial attach="material" map={maps[which]} side={BackSide} />
         </mesh>
         {data[which].portals.map((portal, index) => (
            <Portals key={index} position={portal.position} onClick={() => set(portal.id)} />
         ))}
      </group>
   );
}
export default Dome;
