import { TextureLoader } from 'three';
import { useState } from 'react';
import { useLoader, useThree } from '@react-three/fiber';

import Sphere from './components/Sphere';
import useCreatePoint from '../../hooks/useCreatePoint';
import PointList from './components/PointList';

function Dome({ initialData, args }) {
   // Quản lý state của `data` và scene hiện tại
   const [data, setData] = useState(initialData);
   const [which, set] = useState(0);

   const maps = useLoader(
      TextureLoader,
      data.map((entry) => entry.url),
   );

   const { camera, scene } = useThree();

   const handleMouseClick = useCreatePoint(camera, scene, data, setData, which);
   return (
      <group>
         <Sphere map={maps[which]} args={args} onDoubleClick={handleMouseClick} />
         <PointList points={data[which].points} onPointClick={(id) => set(id)} />
      </group>
   );
}
export default Dome;
