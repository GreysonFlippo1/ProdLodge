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
                values: [0, 2.5],
                step: 0.01,
                default: 1,
                unit: false,
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
                step: 1,
                default: 1,
                unit: false,
            }
        ]
    },
    reverb: {
        id: 'reverb',
        label: 'Reverb',
        colors: ['rgba(50,100,150,0.3)', 'rgba(50,100,150,0.1)'],
        dials: [
            {
                id: 'size',
                label: 'Size',
                values: [0, 17],
                step: 1,
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
                step: 1,
                default: 20,
                unit: 'hz',
            },
            {
                id: 'resonance',
                label: 'Resonance',
                values: [-25, 25],
                step: 1,
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
                step: 1,
                default: 21000,
                unit: 'hz',
            },
            {
                id: 'resonance',
                label: 'Resonance',
                values: [-25, 25],
                step: 1,
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
                step: 1,
                default: 10000,
                unit: 'hz',
            },
            {
                id: 'width',
                label: 'Width',
                values: [1, 25],
                step: 1,
                default: 1,
                unit: false,
            },
            {
                id: 'gain',
                label: 'Gain',
                values: [-30, 30],
                step: 1,
                default: 15,
                unit: false,
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
                step: 1,
                default: 0,
                unit: false,
            },
            {
                id: 'knee',
                label: 'Knee',
                values: [0, 40],
                step: 1,
                default: 0,
                unit: false,
            },
            {
                id: 'ratio',
                label: 'Ratio',
                values: [1, 20],
                step: 1,
                default: 1,
                unit: false,
            },
            {
                id: 'attack',
                label: 'Attack',
                values: [10, 1000],
                step: 1,
                default: 10,
                unit: false,
            },
            {
                id: 'release',
                label: 'Release',
                values: [10, 1000],
                step: 1,
                default: 10,
                unit: false,
            }
        ]
    }
}

interface Props {
    type: string,
    data: object
}
const AudioModule = ({
    type,
    data
}: Props) => {

    const config = moduleConfig[type]

    //some modules have a lot of dials, so styles can be configured for indiviual modules as needed. Could automate later via # of dials
    const styles = {
        backgroundImage: `linear-gradient(${config.colors.toString()})`,
        width: config.width ?? '200px'
    }
    const containerStyles = config.containerStyles ?? {}

    return (
        <div className="audio-module-container" style={styles}>
            <div className="audio-module-name">{config.label}</div>
            <div className="dials-container" style={containerStyles}>
                {config.dials.map(dial => {
                    // need real keys
                    // need to replace default with actual values when present
                    const dataValue = data[dial.id] ?? dial.default
                    const dialPosition = (dataValue - dial.values[0]) / dial.values[1] * 180

                    return (
                        <div className="dial-info-container" key={Math.random()}>
                            <div className="dial-name">{dial.label}</div>
                            <div className="dial-container">
                                <div className="dial-min dial-values">{dial.values[0]}</div>
                                <div className="dial" style={{transform: `rotate(${dialPosition}deg)`}}>
                                    <div className="dial-indicator" />
                                </div>
                                <div className="dial-max dial-values">{dial.values[1]}</div>
                            </div>
                            <div className="dial-value">{dataValue}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default AudioModule;
