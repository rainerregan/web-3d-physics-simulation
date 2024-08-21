import { Grid, OrbitControls, OrthographicCamera } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE from 'three'

const Scene = () => {
  const cameraRef = useRef<THREE.OrthographicCamera>(null);

  // Update camera position every frame
  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.position.set(10, 10, 10); // Position for isometric view
      cameraRef.current.lookAt(0, 0, 0); // Look at the center of the scene
    }
  });

  return (
    <>
      {/* Isometric Camera */}
      <OrthographicCamera
        ref={cameraRef}
        makeDefault // Makes this camera the default for the scene
        zoom={100} // Adjust zoom level for scale
        near={0.1}
        far={1000}
        position={[10, 10, 10]}
      />

      {/* Ground */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="brown" />
      </mesh>

      {/* A basic cube */}
      <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow
        position={[5, 2, 1]}
        intensity={1}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        // shadow-camera-near={0.5}
        // shadow-camera-far={20}
        // shadow-camera-left={-10}
        // shadow-camera-right={10}
        // shadow-camera-top={10}
        // shadow-camera-bottom={-10}
      />

      {/* Grid */}
      {/* <Grid infiniteGrid /> */}
    </>
  )
}

export default Scene