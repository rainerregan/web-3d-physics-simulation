import { Physics } from '@react-three/cannon';
import { button, useControls } from 'leva';
import React, { useEffect, useState } from 'react';
import Box from '../3d/box';
import Cursor from '../3d/cursor';
import Ground from '../3d/ground';

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