import React, { useState, useRef, WheelEvent } from "react";
import * as THREE from "three";
import { useFrame, ThreeEvent } from "@react-three/fiber";

export const Box = () => {
  const [active, setActive] = useState(false);
  const [scale, setScale] = useState(0.1);
  const boxRef = useRef<THREE.Mesh>();

  useFrame(() => {
    if (boxRef.current) {
      boxRef.current.rotation.x += 0.01;
      boxRef.current.rotation.y -= 0.01;
    }
  });

  const handleWheel = (event: ThreeEvent<WheelEvent>) => {
    setScale(event.deltaY / 10);
  };

  return (
    <mesh
      scale={scale}
      onClick={() => setActive(!active)}
      // @ts-ignore
      onWheel={(event) => handleWheel(event)}
      ref={boxRef}
    >
      <boxGeometry args={[2, 1, 2]} />
      <meshStandardMaterial />
    </mesh>
  );
};
