import React, { useRef, useState } from 'react';

import pathMobile from "assets/icons/Path 2.png"
import {ReactComponent as PathSvg} from "assets/icons/Path 2.svg"

import * as SC from './WordStyled'

interface IProps {
    data: any[];
}

const WordComponent: React.FC<IProps> = ({ data }) => {
    const [isHovered, setIsHovered] = useState(false);

    const { word, phonetics } = data[0]

    const audioRef = useRef<HTMLAudioElement>(null);

    const validPhoneticArray = phonetics.filter((el: { text: string; audio: string }) => el.text && el.audio)

    const validPhonetic = validPhoneticArray[0]

    const handlePlayAudio = (): void => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <SC.Container>
            <SC.TitleContainer>
                <div>
                    <h3>{word}</h3>
                    <p>{validPhonetic ? validPhonetic.text : null}</p>
                </div>
                <SC.AudioContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    {isHovered ? <SC.ImageHovered/>: <SC.Image />}
                    <SC.Button onClick={handlePlayAudio}></SC.Button>
                   
                    <audio ref={audioRef} src={validPhonetic ? validPhonetic.audio : null} />
                </SC.AudioContainer>
            </SC.TitleContainer>
        </SC.Container>
    );
}

export default WordComponent;