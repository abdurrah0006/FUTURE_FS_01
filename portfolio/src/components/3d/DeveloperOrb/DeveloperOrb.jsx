import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";

const themeColors = {
  purple: {
    primary: "#7c3aed",
    secondary: "#ec4899"
  },
  blue: {
    primary: "#2563eb",
    secondary: "#06b6d4"
  },
  rose: {
    primary: "#e11d48",
    secondary: "#f97316"
  },
  dark: {
    primary: "#7c3aed",
    secondary: "#ec4899"
  }
};

function DeveloperOrb({ theme = "purple" }) {
  const meshRef = useRef(null);
  const shellRef = useRef(null);

  const colors = themeColors[theme] || themeColors.purple;

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.12;
      meshRef.current.rotation.y = time * 0.18;
    }

    if (shellRef.current) {
      shellRef.current.rotation.x = -time * 0.05;
      shellRef.current.rotation.y = time * 0.08;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.45}>
      <mesh ref={meshRef} scale={2}>
        <icosahedronGeometry args={[1, 5]} />
        <MeshDistortMaterial
          color={colors.primary}
          roughness={0.15}
          metalness={0.35}
          distort={0.3}
          speed={1.4}
        />
      </mesh>

      <mesh ref={shellRef} scale={2.35}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial
          color={colors.secondary}
          wireframe
          transparent
          opacity={0.22}
        />
      </mesh>
    </Float>
  );
}

export default DeveloperOrb;