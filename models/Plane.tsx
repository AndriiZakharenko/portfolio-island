// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

"use client";

import { useGLTF } from "@react-three/drei";


const Plane = ({ isRotating, ...props }) => {
  const plane = useGLTF("/3d/plane.glb");

  return (
    <mesh {...props}>
      <primitive object={plane.scene} />
    </mesh>
  );
};

export default Plane;
