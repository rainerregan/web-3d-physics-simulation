"use client"
import Scene from '@/components/scene'
import { Canvas } from '@react-three/fiber'

const Home = () => {
  return (
    <div className='w-full h-screen'>
      <Canvas
        // camera={{
        //   position: [2, 2, 5]
        // }}
        shadows
      >
        <Scene />
      </Canvas>
    </div>
  )
}

export default Home