import React, { useEffect, useState } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { Html, Environment, OrbitControls, PerspectiveCamera} from "@react-three/drei";

import { Suspense } from "react";
import { Background } from "../../components/Background";
import { Experience } from "../../components/Experience";
import { GenContext} from "../../context/GenContext";

export function Scene() {
    const genData = generator();
    const [gen, setGen] = React.useState({...genData});
    const [data, setData] = React.useState();
    const [display, setDisplay] = React.useState(0); // 0 none, 1 wind, 2 solar

    const [socketUrl, setSocketUrl] = useState('ws://127.0.0.1:8000');
    const [messageHistory, setMessageHistory] = useState([]);
    const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
    const connectionStatus = {[ReadyState.CONNECTING]: 'Connecting', [ReadyState.OPEN]: 'Open', [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed', [ReadyState.UNINSTANTIATED]: 'Uninstantiated'}[readyState];

    useEffect(() => {
        if (lastMessage !== null && lastMessage?.timeStamp != [...messageHistory]?.pop()?.timeStamp) {
            if (lastMessage.data == 'connected') {
                sendMessage('ready');
            } else {
                setMessageHistory((prev) => prev.concat(lastMessage));
                let data = {};
                try {
                    data = JSON.parse(lastMessage.data);
                } catch (error) {
                    data = null;
                }
                setData(data);
            }
        }
    }, [lastMessage]); 

    useEffect(() => {
        let gd = generator(data);
        setGen(gd);
    }, [data]); 

    return (
        <GenContext.Provider value={{gendata: gen, dis: [display, setDisplay]}}>
            <Suspense fallback={null}>
                <color attach="background" args={["#ececec"]} />
                <Background />
                <Experience />
            </Suspense>
        </GenContext.Provider>
    );
}

const generator = (obj) => {
    let wind = {
        v: obj?.wind || genRand(0, 60), // mph -> m/s
        minWind: 6, //
        d: 1.225, // kg/m^3
        BL: 10, //meters,
        wte: 0.4, // Wind turbine efficiency 40%
        p: 0.0 // kw
    };
    wind.p = 0.5 * Math.PI * (wind.BL * wind.BL) * wind.d * (wind.v * 0.447 * wind.v * 0.447 * wind.v * 0.447) * 3600 * wind.wte * 0.00028 / 1000;
    wind.p = Math.round((wind.v > wind.minWind ? wind.p : 0)*100)/100;

    let light = {
        il: obj?.light || genRand(0, 100), // klux
        minLight: 30,
        cf: 0.0079, // W/m2
        area: 100, // m2
        p: 0.0 // kw
    }
    light.p = light.il * 1000 * light.cf * light.area * 3600 / 1000;
    light.p = Math.round((light.il > light.minLight ? light.p : 0)*100)/100;
    return { wind, light };
}

function genRand(min, max) {
    return Math.round(( Math.random() * (max - min) + min)*100)/100;
}

