"use client";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Chair } from "@/components/chair";
import PartOptions from "@/components/part-options";
import TextureOptions from "@/components/texture-options";

function ConfiguratorPage() {
  const [selectedPart, setSelectedPart] = useState("");
  const [selectedTexture, setSelectedTexture] = useState("fabric_.jpg");
  return (
    <div className="h-full">
      <PartOptions
        selectedPart={selectedPart}
        setSelectedPart={setSelectedPart}
      />
      <Canvas shadows camera={{ position: [0, 2, 4], fov: 45 }}>
        <ambientLight intensity={0.5} color="#f4f4f4" />
        <spotLight
          intensity={0.7}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />

        <Chair
          selectedPart={selectedPart}
          selectedTexture={selectedTexture}
          position={[0, -0.78, 0]}
          scale={1.5}
        />

        <Environment preset="warehouse" />
        <ContactShadows
          position={[0, -0.8, 0]}
          opacity={0.25}
          scale={10}
          blur={1.5}
          far={0.8}
        />
        <OrbitControls
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.1}
        />
      </Canvas>
      <TextureOptions setSelectedTexture={setSelectedTexture} />
    </div>
  );
}

export default ConfiguratorPage;
