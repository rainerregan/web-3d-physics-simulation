import { OrthographicCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const IsometricCamera = () => {
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

export default IsometricCamera;