import React, { useRef, useState } from 'react';

import * as SC from './WordStyled'
import link from "assets/icons/tabler_external-link.png"

interface IProps {
    data: any[];
}

const WordComponent: React.FC<IProps> = ({ data }) => {
    const [isHovered, setIsHovered] = useState(false);

    const { word, phonetics, meanings, sourceUrls } = data[0]

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
                    <SC.Title>{word}</SC.Title>
                    <SC.Phonetic>{validPhonetic ? validPhonetic.text : null}</SC.Phonetic>
                </div>
                <SC.AudioContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    {isHovered ? <SC.ImageHovered /> : <SC.Image />}
                    <SC.Button onClick={handlePlayAudio}></SC.Button>

                    <audio ref={audioRef} src={validPhonetic ? validPhonetic.audio : null} />
                </SC.AudioContainer>
            </SC.TitleContainer>
            {meanings ?
                meanings.map(({ partOfSpeech, definitions, synonyms }: { partOfSpeech: string; definitions: any[]; synonyms?: string[]}) => (
                    <>
                        <SC.PartOfSpeechContainer>
                            <SC.PartOfSpeech>{partOfSpeech}</SC.PartOfSpeech>
                            <SC.PartOfSpeechLine></SC.PartOfSpeechLine>
                        </SC.PartOfSpeechContainer>
                        <SC.Meaning>Meaning:</SC.Meaning>
                        <SC.MeaningList>

                            {definitions.map(({ definition, example }) => (
                                <SC.MeaningItem key={definition}>
                                    <p>{definition}</p>
                                   {example ? <SC.Example>"{example}"</SC.Example> : null}
                                </SC.MeaningItem>
                            ))}
                        </SC.MeaningList>
                        {synonyms ?
                            (
                                synonyms.map(el => (
                                    <SC.SynonymsContainer>
                                        <SC.SynonymsTitle>Synonyms:</SC.SynonymsTitle>
                                        <SC.SynonymsItem>{el}</SC.SynonymsItem>
                                    </SC.SynonymsContainer>
                                )))
                            : null}
                        
                    </>
                ))
                : null}
            <SC.PartOfSpeechLine></SC.PartOfSpeechLine>
            <SC.SourceTitle>Source: </SC.SourceTitle>
            <ul>
                {sourceUrls ?
                    (sourceUrls.map((el: string) => <SC.LinkContainer> <SC.Link>{el}</SC.Link><a href={el}><img src={link} alt='link'></img></a></SC.LinkContainer>))
                    : null}
            </ul>
        </SC.Container>
    );
}

export default WordComponent;