import { Html } from "@react-three/drei";

function FloatingTech({ position, label, className = "" }) {
  return (
    <group position={position}>
      <Html center>
        <div className={`floating-tech ${className}`}>
          {label}
        </div>
      </Html>
    </group>
  );
}

export default FloatingTech;