function Portals({ position, onClick }) {
   return (
      <mesh position={position} onClick={onClick}>
         <sphereGeometry args={[1.25, 32, 32]} />
         <meshBasicMaterial color="white" />
      </mesh>
   );
}

export default Portals;
