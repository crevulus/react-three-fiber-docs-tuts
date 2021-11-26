import React from "react";

export const LightSource = () => {
  return (
    // don't use divs inside the canvas
    <>
      <ambientLight intensity={1} />
      <directionalLight color="blue" position={[0, 0, 5]} />
    </>
  );
};
