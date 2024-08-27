import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh
    Object_5: THREE.Mesh
    Object_6: THREE.Mesh
    Object_8: THREE.Mesh
    Object_9: THREE.Mesh
    Object_10: THREE.Mesh
    Object_11: THREE.Mesh
    Object_12: THREE.Mesh
    Object_13: THREE.Mesh
    Object_14: THREE.Mesh
    Object_15: THREE.Mesh
    Object_16: THREE.Mesh
    Object_18: THREE.Mesh
    Object_20: THREE.Mesh
    Object_21: THREE.Mesh
    Object_22: THREE.Mesh
    Object_23: THREE.Mesh
    Object_25: THREE.Mesh
    Object_26: THREE.Mesh
    Object_27: THREE.Mesh
    Object_28: THREE.Mesh
  }
  materials: {
    wood: THREE.MeshStandardMaterial
    ['green.001']: THREE.MeshStandardMaterial
    pocket: THREE.MeshStandardMaterial
    light_red: THREE.MeshStandardMaterial
    ['dark_red.001']: THREE.MeshStandardMaterial
    green: THREE.MeshStandardMaterial
    yellow: THREE.MeshStandardMaterial
    orange: THREE.MeshStandardMaterial
    purple: THREE.MeshStandardMaterial
    ['black.001']: THREE.MeshStandardMaterial
    white: THREE.MeshStandardMaterial
    blue: THREE.MeshStandardMaterial
    black: THREE.MeshStandardMaterial
    wood_shaft: THREE.MeshStandardMaterial
    dark_wood: THREE.MeshStandardMaterial
    dark_red: THREE.MeshStandardMaterial
  }
}

const PoolCue = (props: JSX.IntrinsicElements['group']) => {
  const { nodes, materials } = useGLTF('/low_poly_pool_table.glb') as GLTFResult

  const cueRef = useRef<THREE.Group | null>(null)
  
  // const { camera } = useThree();

  // useFrame(() => {
  //   console.log(camera.position)
  //   cueRef.current!.position.set(camera.position.x + 3, camera.position.y, camera.position.z + 1)
  // })

  return (
    <group ref={cueRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials.black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_21.geometry}
        material={materials.wood_shaft}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_22.geometry}
        material={materials.dark_wood}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_23.geometry}
        material={materials.dark_red}
      />
    </group>
  )
}

useGLTF.preload('/low_poly_pool_table.glb')

export default PoolCue