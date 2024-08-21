"use client"
import PhysicsScene from '@/components/scene'
import { OrthographicCamera } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

const Camera = () => {
  const cameraRef = useRef<THREE.OrthographicCamera>(null);

  // Update camera position every frame
  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.position.set(10, 5, 10); // Position for isometric view
      cameraRef.current.lookAt(0, 0, 0); // Look at the center of the scene
    }
  });

  return (
    <OrthographicCamera
      ref={cameraRef}
      makeDefault // Makes this camera the default for the scene
      zoom={100} // Adjust zoom level for scale
      near={0.1}
      far={1000}
      position={[10, 5, 10]}
    />
  )
}

const Home = () => {
  return (
    <div className='w-full h-screen'>
      <Canvas shadows>
        {/* Isometric Camera */}
        <Camera />

        {/* Physics Scene */}
        <PhysicsScene />

        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight
          castShadow
          position={[5, 1, 3]}
          intensity={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
      </Canvas>
    </div>
  )
}

export default Home