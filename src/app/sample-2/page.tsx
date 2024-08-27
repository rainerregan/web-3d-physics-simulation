"use client"
import IsometricCamera from '@/components/3d/camera'
import PhysicsScene2 from '@/components/scenes/physics-scene-2'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

const Sample2 = () => {
  return (
    <div className='h-screen w-full'>
      <Canvas shadows>
        <OrbitControls />
        
        <PhysicsScene2 />

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

export default Sample2