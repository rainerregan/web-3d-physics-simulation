import { useBox } from "@react-three/cannon";
import * as THREE from "three";
import { useDragConstraint } from "./cursor";

// Box component (dynamic object)
const Box: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const [ref, api] = useBox<THREE.Mesh>(() => ({
    mass: 10,
    angularDamping: 0.95,
    position,
    castShadow: true,
    receiveShadow: true,
    type: 'Dynamic',
  }));

  const bind = useDragConstraint(ref)

  return (
    <mesh ref={ref} {...bind} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default Box;