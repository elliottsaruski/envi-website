import { Canvas } from "@react-three/fiber";
import {
  Center,
  Edges,
  GradientTexture,
  OrbitControls,
  Text3D,
} from "@react-three/drei";

import fontURL from "../../assets/fonts/Tac One_Regular.json";
import { useRef } from "react";

function R3FText() {
  const textRef = useRef();
  return (
    <Canvas orthographic camera={{ position: [0, 0, 10], zoom: 50 }}>
      <Center rotation={[-0.15, -0.25, 0]} position={[-0.45, 0.5, 0]}>
        <Text3D
          font={fontURL}
          curveSegments={24}
          height={1.5}
          lineHeight={0.5}
          letterSpacing={-0.01}
          size={1.75}
          domElement={textRef.current}>
          {`ENVI`}
          <meshBasicMaterial>
            <GradientTexture
              stops={[0, 1]} // As many stops as you want
              colors={["hsla(40, 8%, 7%, 1)", "hsla(192, 100%, 52%, 1)"]}
            />
          </meshBasicMaterial>
          <Edges
            linewidth={2}
            // scale={1.15}
            threshold={15}
            color="white"
            position={[-0.01, 0, 0]}
          />
        </Text3D>
      </Center>

      <OrbitControls
        enableDamping={true}
        enableZoom={false}
        autoRotate={true}
      />
    </Canvas>
  );
}

export default R3FText;
