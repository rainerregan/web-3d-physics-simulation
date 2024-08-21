"use client"
import IsometricCamera from '@/components/3d/camera'
import PhysicsScene from '@/components/scenes/physics-scene'
import { Canvas } from '@react-three/fiber'

const Home = () => {
  return (
    <div className='w-full h-screen'>
      <Canvas shadows>
        <IsometricCamera />

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