import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import DeveloperOrb from "../DeveloperOrb/DeveloperOrb";
import FloatingTech from "../FloatingTech/FloatingTech";
import "./HeroScene.css";

function HeroScene() {
  return (
    <div className="hero-scene">
      <Canvas
        camera={{
          position: [0, 0, 6],
          fov: 45
        }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={1.2} />

        <directionalLight
          position={[3, 4, 5]}
          intensity={2}
        />

        <pointLight
          position={[-3, -2, 3]}
          intensity={2}
        />

        <DeveloperOrb />

        <FloatingTech position={[-2.3, 1.2, 0]} label="React" />
        <FloatingTech position={[2.2, 1.4, 0]} label="Node.js" />
        <FloatingTech position={[-2.5, -1.2, 0]} label="MongoDB" />
        <FloatingTech position={[2.3, -1.1, 0]} label="UI/UX" />

        <Environment preset="city" />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
}

export default HeroScene;