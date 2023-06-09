'use client'
import 'animate.css'

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Model } from '../atoms/Classroom'
function ClassroomContainer() {
  return (
    <picture className="hidden md:flex h-[330px] md:w-full md:h-[400px] z-20">
      <Canvas camera={{ zoom: 2.8, position: [-150, 50, 90] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[35, 35, 0]} />
        <pointLight position={[-35, 35, 0]} />
        <Model />
        <OrbitControls />
      </Canvas>
    </picture>
  )
}

export default ClassroomContainer
