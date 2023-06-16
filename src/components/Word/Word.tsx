import React, { useRef } from 'react';

import pathMobile from "assets/icons/Path 2.png"

import * as SC from './WordStyled'

interface IProps {
    data: any[];
}

const WordComponent: React.FC<IProps> = ({ data }) => {


    const { word, phonetics } = data[0]

    const audioRef = useRef<HTMLAudioElement>(null);

    const validPhoneticArray = phonetics.filter((el: { text: string; audio: string }) => el.text && el.audio)

    const validPhonetic = validPhoneticArray[0]

    const handlePlayAudio = (): void => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    return (
        <SC.Container>
            <SC.TitleContainer>
                <div>
                    <h3>{word}</h3>
                    <p>{validPhonetic ? validPhonetic.text : null}</p>
                </div>
                <div>
                    <button onClick={handlePlayAudio}><img src={pathMobile} alt="audio" /></button>
                    <audio ref={audioRef} src={validPhonetic ? validPhonetic.audio : null} />
                </div>
            </SC.TitleContainer>
        </SC.Container>
    );
}

export default WordComponent;