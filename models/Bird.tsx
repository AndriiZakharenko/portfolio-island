// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

"use client";

import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

const Bird = () => {
  const birdRef = useRef();
  const bird = useGLTF("/3d/bird.glb");

  return (
    <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={bird.scene} />
    </mesh>
  );
};

export default Bird;
