import { Physics, useBox, usePlane, usePointToPointConstraint, useRaycastVehicle, useSphere } from '@react-three/cannon';
import { Html } from '@react-three/drei';
import { ThreeEvent, useFrame, useThree } from '@react-three/fiber';
import { button, useControls } from 'leva';
import React, { createRef, RefObject, use, useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const cursor = createRef<THREE.Mesh>()

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

function useDragConstraint(child: RefObject<THREE.Object3D>) {
  const [, , api] = usePointToPointConstraint(cursor, child, { pivotA: [0, 0, 0], pivotB: [0, 0, 0] });

  useEffect(() => void api.disable(), []);

  const onPointerUp = useCallback((e: ThreeEvent<PointerEvent>) => {
    document.body.style.cursor = 'grab';
    //@ts-expect-error Investigate proper types here.
    e.target.releasePointerCapture(e.pointerId);
    api.disable();
  }, [api]);

  const onPointerDown = useCallback((e: ThreeEvent<PointerEvent>) => {
    document.body.style.cursor = 'grabbing';
    e.stopPropagation();
    //@ts-expect-error Investigate proper types here.
    e.target.setPointerCapture(e.pointerId);
    api.enable();
  }, [api]);

  return { onPointerUp, onPointerDown };
}

const Cursor = () => {
  const diameter = 0.1
  const [ref, api] = useSphere(() => ({ args: [diameter], type: 'Kinematic', mass: 0, collisionFilterMask: 0 }), cursor)

  useFrame(({ mouse, viewport: { height, width } }) => {
    const x = mouse.x * width
    const y = (mouse.y * height) / 1.85 + x / 5.78
    api.position.set(x / 1.42, y, 0)
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[diameter, 16, 16]} />
      <meshBasicMaterial fog={false} depthTest={false} transparent opacity={0.5} />
    </mesh>
  )
}

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

const PhysicsScene: React.FC = () => {

  // State to manage boxes
  const [boxes, setBoxes] = useState<Array<{ position: [number, number, number] }>>([
    { position: [0, 5, 0] },
    { position: [0.5, 10, 0] },
    { position: [-0.5, 15, 0] },
  ]);

  const controls = useControls({
    gravity: { value: -9.82, step: 0.1 },
    addBox: button((get) => addBox()),
  }, [boxes]);

  // function for returning a random number between -5 and 5
  const random = () => Math.random() * 10 - 5;

  const addBox = () => {
    // Add a new box with a random position
    const newBox = {
      position: [
        random(), // Random x position between -5 and 5
        5, // Fixed y position
        random(), // Random z position between 0 and 10
      ] as [number, number, number],
    };

    // Append the new box to the boxes array
    setBoxes([...boxes, newBox]);
  };

  useEffect(() => {
    // Update the boxes array when the state changes
    console.log(boxes)
  }, [boxes])


  return (
    <Physics gravity={[
      0,
      controls.gravity,
      0,
    ]}>
      <Ground />
      <Cursor />

      {boxes.map((box, index) => (
        <Box key={index} position={box.position} />
      ))}
    </Physics>
  );
};

export default PhysicsScene;