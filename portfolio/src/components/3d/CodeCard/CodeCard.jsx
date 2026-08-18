import { Html } from "@react-three/drei";

function CodeCard({ code }) {
  return (
    <Html center>
      <div className="hero-code-card">
        {code.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </Html>
  );
}

export default CodeCard;