import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";

function DeveloperOrb() {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={2}>
        <icosahedronGeometry args={[1, 5]} />

        <MeshDistortMaterial
          color="#7c3aed"
          roughness={0.18}
          metalness={0.25}
          distort={0.25}
          speed={1.5}
        />
      </mesh>
    </Float>
  );
}

export default DeveloperOrb;