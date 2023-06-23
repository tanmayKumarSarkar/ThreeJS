import React, { useContext, useRef } from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Terrain } from './Terrain';
import {GenContext} from '../context/GenContext';
import { Card } from './Card';

export const Experience = () => {
    const { gendata, dis } = useContext(GenContext);
    // console.log(gendata);
    const intensity = (gendata.light.il / 100)-0.5;
    return (
        <>
            <OrbitControls target={[0,0,1]}/>
            <PerspectiveCamera position={[5, 10, 10]} fov={28} makeDefault />
            <ambientLight intensity={0.5} />
            <pointLight color="white" intensity={intensity} position={[10, 10, 10]} />
            <Terrain position={[2.3, 1.3, 5]} rotation={[-0.2, 0.5, 0]} />
            <Card position={[2.5, 2.1, .5]} rotation={[-.5,-.19,.1]} />
            {/* <Card position={[0, 2.50, 1.4]} rotation={[0,0,0]} /> */}
        </>
    );
}