import { useState, useRef, useEffect, useContext } from "react";
import deleteButton from "../assets/delete.png";

import "../invisibleScrollbar.css";

const moduleConfig = {
    gain: {
        id: 'gain',
        label: 'Gain',
        colors: ['rgba(255,0,0,0.3)', 'rgba(255,0,0,0.1)'],
        dials: [
            {
                id: 'amount',
                label: 'Amount',
                values: [-40, 40],
                step: 2,
                default: 0,
                unit: 'dB',
            }
        ]
    },
    waveshaper: {
        id: 'waveshaper',
        label: 'Waveshaper',
        colors: ['rgba(50,200,100,0.3)', 'rgba(50,200,100,0.1)'],
        dials: [
            {
                id: 'amount',
                label: 'Amount',
                values: [1, 100],
                step: 0,
                default: 1,
                unit: 'x',
            }
        ]
    },
    reverb: {
        id: 'reverb',
        label: 'Reverb',
        colors: ['rgba(50,100,150,0.3)', 'rgba(50,100,150,0.1)'],
        dials: [
            {
                id: 'wetness',
                label: 'Dry / Wet',
                values: [0, 100],
                step: 0,
                default: 1,
                unit: false,
            },
            {
                id: 'size',
                label: 'Size',
                values: [5, 1500],
                step: 0,
                default: 25,
                unit: 'ms',
            },
            {
                id: 'quality',
                label: 'Quality',
                values: [2, 25],
                step: 0,
                default: 10,
                unit: false,
            }
        ]
    },
    convolver: {
        id: 'convolver',
        label: 'Convolver',
        colors: ['rgba(250,100,150,0.3)', 'rgba(250,100,150,0.1)'],
        dials: [
            {
                id: 'size',
                label: 'Size',
                values: [0, 17],
                step: 0,
                default: 1,
                unit: false,
            }
        ]
    },
    highpass: {
        id: 'highpass',
        label: 'HighPass',
        colors: ['rgba(50,180,180,0.3)', 'rgba(50,180,180,0.1)'],
        dials: [
            {
                id: 'frequency',
                label: 'Frequency',
                values: [20, 21000],
                step: 0,
                default: 20,
                unit: 'hz',
            },
            {
                id: 'resonance',
                label: 'Resonance',
                values: [-25, 25],
                step: 0,
                default: 0,
                unit: false,
            },
        ]
    },
    lowpass: {
        id: 'lowpass',
        label: 'LowPass',
        colors: ['rgba(250,120,0,0.3)', 'rgba(250,120,0,0.1)'],
        dials: [
            {
                id: 'frequency',
                label: 'Frequency',
                values: [20, 21000],
                step: 0,
                default: 21000,
                unit: 'hz',
            },
            {
                id: 'resonance',
                label: 'Resonance',
                values: [-25, 25],
                step: 0,
                default: 0,
                unit: false,
            },
        ]
    },
    peak: {
        id: 'peak',
        label: 'Peak',
        colors: ['rgba(255,255,0,0.3)', 'rgba(255,255,0,0.1)'],
        dials: [
            {
                id: 'frequency',
                label: 'Frequency',
                values: [20, 21000],
                step: 0,
                default: 10000,
                unit: 'hz',
            },
            {
                id: 'width',
                label: 'Width',
                values: [1, 25],
                step: 0,
                default: 1,
                unit: false,
            },
            {
                id: 'gain',
                label: 'Gain',
                values: [-40, 40],
                step: 0,
                default: 15,
                unit: 'dB',
            }
        ]
    },
    compression: {
        id: 'compression',
        label: 'Compression',
        width: '432px',
        containerStyles: {
            flexWrap: 'wrap',
            width: 'auto',
            flexDirection: 'row',
        },
        colors: ['rgba(150,50,150,0.3)', 'rgba(150,50,150,0.1)'],
        dials: [
            {
                id: 'threshold',
                label: 'Threshold',
                values: [-100, 0],
                step: 0,
                default: 0,
                unit: 'dB',
            },
            {
                id: 'knee',
                label: 'Knee',
                values: [0, 40],
                step: 0,
                default: 0,
                unit: 'dB',
            },
            {
                id: 'ratio',
                label: 'Ratio',
                values: [1, 20],
                step: 0,
                default: 1,
                unit: false,
            },
            {
                id: 'attack',
                label: 'Attack',
                values: [10, 1000],
                step: 0,
                default: 10,
                unit: 'dB',
            },
            {
                id: 'release',
                label: 'Release',
                values: [10, 1000],
                step: 0,
                default: 10,
                unit: 'dB',
            }
        ]
    }
}

let knob_angle = null
let dialObject = null
let updateKnob = null
let startingPos = null

const turnDial = (e, dial, updateEffect) => {

    if (!startingPos) {
        startingPos = [e.clientX, e.clientY]
    }

    const cursor = [e.clientX, e.clientY]
    const deg = cursor[0] - startingPos[0]

    knob_angle = deg

    if (updateEffect && !updateKnob) {
        updateKnob = updateEffect
        dialObject = dial
    }
}

const turnDialUpdate = (e) => {
    if (dialObject && updateKnob) {
        turnDial(e, null, null)
        updateKnob(dialObject, knob_angle)
    }
}

const turnDialStop = () => {
    knob_angle = null
    dialObject = null
    updateKnob = null
    startingPos = null
}

document.addEventListener('mousemove', turnDialUpdate);
document.addEventListener('mouseup', turnDialStop);

interface Props {
    type: string,
    data: object
}
const AudioModule = ({
    type,
    data
}: Props) => {

    const config = moduleConfig[type]
    const [moduleState, setModuleState] = useState({...data})

    //some modules have a lot of dials, so styles can be configured for indiviual modules as needed. Could automate later via # of dials
    const styles = {
        backgroundImage: `linear-gradient(${config.colors.toString()})`,
        width: config.width ?? '200px'
    }
    const containerStyles = config.containerStyles ?? {}

    const updateDial = (dial, val) => {
        const range = dial.values[1] - dial.values[0] // (val / 100) * range
        const ang = Number(moduleState[dial.id] ?? dial.default) + ((val / 100) * range)
        const dataValue = Math.min(Math.max(ang, dial.values[0]), dial.values[1]).toFixed(dial.step) ?? dial.default
        setModuleState({...moduleState, [dial.id]: dataValue})
    }

    return (
        <div className="audio-module-container" style={styles}>
            <div className="audio-module-name">{config.label}</div>
            <div className="dials-container" style={containerStyles}>
                {config.dials.map(dial => {
                    const dataValue = moduleState[dial.id] ?? dial.default
                    const dialPosition = (dataValue - dial.values[0]) / (dial.values[1] - dial.values[0]) * 270 - 45

                    return (
                        <div className="dial-info-container" key={Math.random()}>
                            <div className="dial-name">{dial.label}</div>
                            <div className="dial-container">
                                <div className="dial-min dial-values">{dial.values[0]}</div>
                                <div className="dial"
                                    id={dial.id}
                                    style={{transform: `rotate(${dialPosition}deg)`}}
                                    onMouseDown={(e) => { turnDial(e, dial, updateDial) }}
                                >
                                    <div className="dial-indicator" />
                                </div>
                                <div className="dial-max dial-values">{dial.values[1]}</div>
                            </div>
                            <div className="dial-value">{dataValue}{dial.unit ?? ''}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default AudioModule;
