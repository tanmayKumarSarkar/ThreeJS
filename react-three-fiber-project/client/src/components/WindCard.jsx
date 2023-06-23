import { Suspense, useContext } from "react";
import { Html } from '@react-three/drei';
import { GenContext } from '../context/GenContext';

export function WindCard(props) {
    const {gendata, dis} = useContext(GenContext);

    const containerStyle = {
        height: "17.84em",
        width: '15em',
        backgroundColor: '#041987',
        border: "1px solid #677CEA",
        borderRadius: "8px 8px 0px 0px",
        display: props.visibility? "block" : "none"
    }
    const hederStyle = {
        height: "2em",
        backgroundColor: '#041987',
        borderBottom: "1px solid #677CEA",
        borderRadius: "8px 8px 0px 0px",
    }
    const dot = {
        height: ".7em",
        width: ".7em",
        border:"1px solid #677CEA",
        borderRadius: "50%",
        display: "inline-block",
        margin: ".6em .2em",
    }
    const dot2 = {
        height: "1em",
        width: "1em",
        border:"2px solid #677CEA",
        borderRadius: "50%",
        display: "inline-block",
        margin: ".2em .2em",
        float: "left",
    }
    const headerTxt = {
        font: "22px roboto",
        color: '#9AA8F3',
        marginLeft: "-1em",
    }
    const square = {
        height: "1.1em",
        width: "1.1em",
        margin: ".3em .1em",
        backgroundColor: "#536DFA",
        border: "1px solid #AEBAFB",
        borderRadius: "1px",
    }
    return (
    <>
            
        <Html transform >
            <style>
                {`
                    table {
                        width: 100%;
                        margin-top:.8em;
                        color:#9AA8F3;
                    }
                    tr, td {
                        padding: 2px;
                        border-bottom: 1px solid #677CEA;
                    }
                `}
            </style>
            <div style={containerStyle}>
                <div style={hederStyle}>
                    <div style={{float: "right", display:"flex"}}>
                        <span style={{...dot, borderColor: "#D2D8F9"}}></span>
                        <span style={{...dot, borderColor: "#9AA8F3"}}></span>
                        <span style={{...dot, borderColor: "#B89AF3"}}></span>
                    </div>
                    
                </div>
                <div style={{ textAlign: "center"}}>
                    <span style={dot2}></span>
                    <span style={headerTxt}>Wind Turbine</span>
                </div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td><div style={square}></div></td>
                                <td>Wind Speed</td>
                                <td>{ gendata.wind.v }</td>
                                <td>mph</td>
                            </tr>
                            <tr>
                                <td><div style={square}></div></td>
                                <td>Start Speed</td>
                                <td>{ gendata.wind.minWind }</td>
                                <td>mph</td>
                            </tr>
                            <tr>
                                <td><div style={square}></div></td>
                                <td>Wind Density</td>
                                <td>{ gendata.wind.d }</td>
                                <td>kg/m^3</td>
                            </tr>
                            <tr>
                                <td><div style={square}></div></td>
                                <td>Blade Length</td>
                                <td>{ gendata.wind.BL }</td>
                                <td>metre</td>
                            </tr>
                            <tr>
                                <td><div style={square}></div></td>
                                <td>Efficiency</td>
                                <td>{ gendata.wind.wte*100 }</td>
                                <td>%</td>
                            </tr>
                            <tr>
                                <td><div style={square}></div></td>
                                <td>Power Output</td>
                                <td>{ gendata.wind.p }</td>
                                <td>kw</td> 
                            </tr>
                        </tbody>
                    </table>       
                </div>
            </div>
        </Html>
    </>
    );
}