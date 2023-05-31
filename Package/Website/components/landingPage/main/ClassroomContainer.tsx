import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Classroom";
import { OrbitControls } from "@react-three/drei";
function ClassroomContainer() {
  return (
    <div className="w-full flex max-w-prose">
      <Canvas className="" camera={{ zoom: 3, position: [-150, 90, 90]}}>
        <ambientLight intensity={0.5} />
        <pointLight position={[35, 35, 0]} />
        <pointLight position={[-35, 35, 0]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls />   
      </Canvas>
    </div>
  );
}

export default ClassroomContainer;
