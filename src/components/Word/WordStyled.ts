import styled from "styled-components";
import { ReactComponent as PathSvg } from "assets/icons/Path 2.svg";

export const Container = styled.div`
  padding-top: ${(props) => props.theme.space[6]};
  padding-bottom: 85px;
  padding-left: ${(props) => props.theme.space[6]};
  padding-right: ${(props) => props.theme.space[6]};
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: ${(props) => props.theme.space[8]};
`;

export const Title = styled.h3`
margin-bottom: ${props => props.theme.space[2]};

font-size: ${props => props.theme.size.M};
line-height: 1.21;
font-weight: ${props => props.theme.weight.bold};
`;

export const Phonetic = styled.p`
color: ${props => props.theme.color.hover};
line-height: 1.33;
font-size: 18px ;
`

export const AudioContainer = styled.div`
  position: relative;

  &:hover > Button {
    background-color: rgba(164, 69, 237);
  }
`;



export const Image = styled(PathSvg)`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(-33%) translateY(50%);

  width: 20px;
  height: 20px;
  fill: ${(props) => props.theme.color.hover};

`;

export const ImageHovered = styled(PathSvg)`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(-33%) translateY(50%);
  width: 20px;
  height: 20px;
  fill: white;
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;

  border-radius: ${(props) => props.theme.radius[5]};
  background-color: rgba(164, 69, 237, 0.25);
`;

export const PartOfSpeechContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

margin-bottom: ${props => props.theme.space[8]};
`;

export const PartOfSpeech = styled.h3`
margin-right: 15px;

font-style: italic;
font-size: 18px;
line-height: 1.21;
font-weight: ${props => props.theme.weight.bold};
`

export const PartOfSpeechLine = styled.div`
  height: 1px;
  width: 100%;
  background-color: #3a3a3a;
`;

export const Meaning = styled.h4`
margin-bottom: 17px;

line-height: 1.21;
color: #757575;
font-size: ${props => props.theme.size.N};
`

export const MeaningList = styled.ul`
margin-bottom: ${props => props.theme.space[6]};
  `;

export const MeaningItem = styled.li`
  position: relative;

  margin-left: ${(props) => props.theme.space[4]};

  color: ${(props) => props.theme.color.text};

  &:not(:last-child){
    margin-bottom: 13px;
  }

  &::after {
    position: absolute;
    left: 0;
    top: 0;

    transform: translateX(-20px) translateY(10px);

    width: 5px;
    height: 5px;

    content: " ";
    background-color: purple; /* Set the color of the marker to purple */

    border-radius: ${(props) => props.theme.radius[5]};
  }
`;

export const Example = styled.p`
margin-top: 13px;

color:${props => props.theme.color.secondaryText};
`

export const SynonymsContainer = styled.div`
display: flex;

margin-bottom: 33px;
`

export const SynonymsTitle = styled.h4`
  margin-right: ${(props) => props.theme.space[6]};

  font-size: ${(props) => props.theme.size.N};
  color:${props => props.theme.color.secondaryText};
  line-height: 1.21;
`;

export const SynonymsItem = styled.p`
  font-size: ${(props) => props.theme.size.N};
  color: ${props => props.theme.color.hover};
  line-height: 1.21;
`;

export const SourceTitle = styled.h4`
  margin-top: ${(props) => props.theme.space[6]};
  margin-bottom: ${(props) => props.theme.space[2]};

  color: ${(props) => props.theme.color.secondaryText};
  text-decoration: underline;
`;

export const LinkContainer = styled.div`
display: flex;
align-items: center;
`

export const Link = styled.p`
margin-right: 9px;

color: ${props => props.theme.color.text};

border-bottom: 1px solid #757575;
`