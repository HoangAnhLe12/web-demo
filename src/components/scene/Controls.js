import React, { useRef } from 'react';
import { extend, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

extend({ OrbitControls });

function Controls(props) {
   const { camera, gl } = useThree();
   const ref = useRef();
   useFrame(() => ref.current.update());
   return <orbitControls ref={ref} target={[0, 0, 0]} {...props} args={[camera, gl.domElement]} />;
}

export default Controls;
