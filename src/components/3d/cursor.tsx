import { usePointToPointConstraint, useSphere } from "@react-three/cannon"
import { ThreeEvent, useFrame } from "@react-three/fiber"
import { createRef, RefObject, useCallback, useEffect } from "react"
import * as THREE from "three"

const cursor = createRef<THREE.Mesh>()

const Cursor = () => {
  const diameter = 0.1
  const [ref, api] = useSphere(() => ({ args: [diameter], type: 'Kinematic', mass: 0, collisionFilterMask: 0 }), cursor)

  useFrame(({ mouse, viewport: { height, width } }) => {
    const x = mouse.x * width
    const y = (mouse.y * height) / 1.85 + x / 5.78
    api.position.set(x / 1.42, y, 0)
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[diameter, 16, 16]} />
      <meshBasicMaterial fog={false} depthTest={false} transparent opacity={0.5} />
    </mesh>
  )
}

export function useDragConstraint(child: RefObject<THREE.Object3D>) {
  const [, , api] = usePointToPointConstraint(cursor, child, { pivotA: [0, 0, 0], pivotB: [0, 0, 0] });

  useEffect(() => void api.disable(), []);

  const onPointerUp = useCallback((e: ThreeEvent<PointerEvent>) => {
    document.body.style.cursor = 'grab';
    //@ts-expect-error Investigate proper types here.
    e.target.releasePointerCapture(e.pointerId);
    api.disable();
  }, [api]);

  const onPointerDown = useCallback((e: ThreeEvent<PointerEvent>) => {
    document.body.style.cursor = 'grabbing';
    e.stopPropagation();
    //@ts-expect-error Investigate proper types here.
    e.target.setPointerCapture(e.pointerId);
    api.enable();
  }, [api]);

  return { onPointerUp, onPointerDown };
}


export default Cursor;