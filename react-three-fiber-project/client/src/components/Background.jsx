import { Environment, Sphere } from "@react-three/drei";
import { Gradient, LayerMaterial } from "lamina";

import * as THREE from "three";

export const Background = () => {
  return (
    <>
      <Environment preset="park" />
      <Sphere scale={[100, 100, 100]} rotation-y={Math.PI / 2}>
        <LayerMaterial
          color={"#ffffff"}
          lighting="physical"
          transmission={1}
          side={THREE.BackSide}
        >
          <Gradient
            colorA={"#78b2d3"}
            colorB={"#00b300"}
            axes={"y"}
            start={0}
            end={-0.8}
          />
        </LayerMaterial>
      </Sphere>
    </>
  );
};