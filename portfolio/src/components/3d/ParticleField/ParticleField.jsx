import { useMemo } from "react";
import * as THREE from "three";

function ParticleField({ count = 120 }) {
  const positions = useMemo(() => {
    const values = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i += 1) {
      values[i] = (Math.random() - 0.5) * 9;
    }

    return values;
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.025}
        color="#7c3aed"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

export default ParticleField;