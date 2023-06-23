import {
    Environment ,
    OrbitControls ,
    PerspectiveCamera ,
} from "@react-three/drei";

import { Suspense } from "react";
    
export function Scene() {
    return (
        <Suspense fallback={null}>
            <Environment
                files={process.env.PUBLIC_URL + "/textures/HDR_029_Sky_Cloudy_Ref.hdr"}
                background={"both"}
            />
            {/* <PerspectiveCamera makeDefault position={[-6, 3.9, 6.211]} fov={40} />
            <OrbitControls target={[-2.64, -0.71, 0.03]} /> */}
            <OrbitControls target={[0, 0, 0]} />
            <PerspectiveCamera makeDefault fov={75} position={[0, 0, 10]} />
            <mesh>
                <boxGeometry />
                <meshStandardMaterial />
            </mesh>
        </Suspense>
    );
}