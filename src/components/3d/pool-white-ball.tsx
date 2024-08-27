import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useSphere } from '@react-three/cannon'


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

const PoolWhiteBall = ({
  position,
  props
}: {
  position: [number, number, number]
  props?: JSX.IntrinsicElements['group']
}) => {
  const { nodes, materials } = useGLTF('/low_poly_pool_table.glb') as GLTFResult

  const diameter = 0.1
  const [ref, api] = useSphere<THREE.Mesh>(() => ({ args: [diameter], type: 'Dynamic', mass: 10, position: position }))

  return (
    <mesh
    ref={ref}
    castShadow
    receiveShadow
    geometry={nodes.Object_18.geometry}
    material={materials.white}
    position={position}
    scale={diameter}
  />
  )
}

useGLTF.preload('/low_poly_pool_table.glb')

export default PoolWhiteBall