import React from 'react'

const Wall = () => {
  return (
    <mesh receiveShadow castShadow>
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial color="lightblue" />
    </mesh>
  )
}

export default Wall