'use client'
import 'animate.css'

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Model } from '../atoms/Classroom'
import { OrbitControls } from '@react-three/drei'
import Loading from '@/app/loading'
function ClassroomContainer() {
  return (
    <picture className="hidden md:flex h-[330px] md:w-full md:h-[400px] z-20">
      <Suspense fallback={<Loading />}>
        <Canvas camera={{ zoom: 2.8, position: [-150, 50, 90] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[35, 35, 0]} />
          <pointLight position={[-35, 35, 0]} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </Suspense>
    </picture>
  )
}

export default ClassroomContainer
