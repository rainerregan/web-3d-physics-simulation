import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics, useBox, usePlane } from '@react-three/cannon';
import * as THREE from 'three';

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

// Box component (dynamic object)
const Box: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const [ref] = useBox<THREE.Mesh>(() => ({
    mass: 1,
    position,
    castShadow: true,
    receiveShadow: true,
  }));

  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

const PhysicsScene: React.FC = () => {
  return (
    <Physics>
      <Ground />
      <Box position={[0, 5, 0]} />
      <Box position={[2, 10, 0]} />
      <Box position={[-2, 15, 0]} />
    </Physics>
  );
};

export default PhysicsScene;