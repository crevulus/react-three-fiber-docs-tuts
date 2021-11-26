import React from "react";
import { Canvas } from "@react-three/fiber";

import { LightSource } from "./components/Lighting/LightSource";

import "./App.css";
import { Box } from "./components/Shapes/Box";

function App() {
  return (
    <div className="App">
      <Canvas>
        <LightSource />
        <Box />
      </Canvas>
    </div>
  );
}

export default App;
