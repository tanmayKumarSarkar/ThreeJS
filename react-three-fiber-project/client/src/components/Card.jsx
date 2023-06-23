
import { Suspense, useContext } from "react";
import { WindCard } from "./WindCard";
import { SolarCard } from "./SolarCard";
import { CameraControls } from "@react-three/drei";
import { GenContext } from "../context/GenContext";
    
export function Card(props) {
    const { gendata, dis } = useContext(GenContext);
    const [display, setDisplay] = dis;
    return (
        <Suspense fallback={null} >
            <spotLight position={[2, 1, 1]} intensity={1} penumbra={0.1} />
            <CameraControls enableZoom={false} />
             <mesh scale={[2.1,2.52,.025]} receiveShadow position={props.position} rotation={props.rotation} visible={display>0}>
                <boxBufferGeometry attach="geometry" />
                <meshLambertMaterial attach="material" color="#A1F6F9" opacity={0.8} transparent/>
            </mesh>
            <group scale={[0.35,0.35,0.35]} position={props.position} rotation={props.rotation}>
                <WindCard visibility={ display==1 } />
                <SolarCard visibility={ display==2 } /> 
            </group>
        </Suspense>
    );
}