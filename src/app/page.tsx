"use client"
import { Canvas } from '@react-three/fiber'
import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-screen'>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="hotpink" wireframe />
        </mesh>
      </Canvas>
    </div>
  )
}

export default Home