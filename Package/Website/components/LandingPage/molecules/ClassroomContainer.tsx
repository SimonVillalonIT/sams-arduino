'use client'
import 'animate.css'

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Classroom } from '../atoms'
function ClassroomContainer() {
  return (
    <picture className="z-20 hidden h-[330px] md:flex md:h-[400px] md:w-full">
      <Canvas camera={{ zoom: 2.8, position: [-150, 50, 90] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[35, 35, 0]} />
        <pointLight position={[-35, 35, 0]} />
        <Classroom />
        <OrbitControls />
      </Canvas>
    </picture>
  )
}

export default ClassroomContainer
