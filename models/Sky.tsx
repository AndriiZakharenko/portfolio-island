// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

"use client";

import { useGLTF } from "@react-three/drei";

const Sky = () => {
  const sky = useGLTF("/3d/sky.glb");

  return (
    <mesh>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
