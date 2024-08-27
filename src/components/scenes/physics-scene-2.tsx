import { Debug, Physics } from '@react-three/cannon'
import Ground from '../3d/ground'
import { PoolTable } from '../3d/pool-table'
import PoolCue from '../3d/pool-cue'
import PoolWhiteBall from '../3d/pool-white-ball'

const PhysicsScene2 = () => {
  return (
    <Physics gravity={[0, -9.82, 0]}>
      <Debug color="black" scale={1.1}>

        <Ground />

        <PoolWhiteBall position={[0, 10, 0]} />

        <PoolTable position={[0,2,0]} props={{ scale: [0.5, 0.5, 0.5] }} />

        <PoolCue scale={0.014} rotation={[Math.PI / 2, 0, 0]} />
      </Debug>
    </Physics>
  )
}

export default PhysicsScene2