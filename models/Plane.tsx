// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

"use client";

import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

const Plane = () => {
  const planeRef = useRef();
  const plane = useGLTF("/3d/plane.glb");

  return (
    <mesh ref={planeRef}>
      <primitive object={plane.scene} />
    </mesh>
  );
};

export default Plane;
