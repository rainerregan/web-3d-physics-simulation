import { usePlane } from "@react-three/cannon";
import * as THREE from "three";

// Plane component (ground)
const Ground: React.FC = () => {
  const [ref] = usePlane<THREE.Mesh>(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0],
    type: 'Static',
  }));

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial color="lightgreen" />
    </mesh>
  );
};

export default Ground;