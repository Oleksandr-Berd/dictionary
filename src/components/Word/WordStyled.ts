import styled from "styled-components";
import { ReactComponent as PathSvg } from "assets/icons/Path 2.svg";

export const Container = styled.div`
  padding-top: ${(props) => props.theme.space[6]};
  padding-bottom: 85px;
  padding-left: ${(props) => props.theme.space[6]};
  padding-right: ${(props) => props.theme.space[6]};

  @media (min-width: 768px) {
    padding-top: 50px;
    padding-bottom: 118px;
    padding-left: 39px;
    padding-right: ${(props) => props.theme.space[10]};
  }

  @media (min-width: 1440px) {
    padding-top: 45px;
    padding-bottom: 124px;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: ${(props) => props.theme.space[8]};

  @media (min-width: 768px) {
    margin-bottom: 42px;
  }
`;

export const Title = styled.h3`
  margin-bottom: ${(props) => props.theme.space[2]};

  font-size: ${(props) => props.theme.size.M};
  line-height: 1.21;
  font-weight: ${(props) => props.theme.weight.bold};

  @media (min-width: 768px) {
    margin-bottom: 11px;

    font-size: ${(props) => props.theme.size.XL};
    line-height: 1.05;
  }
`;

export const Phonetic = styled.p`
  color: ${(props) => props.theme.color.hover};
  line-height: 1.33;
  font-size: 18px;

  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.size.XXN};
    line-height: 1.21;
  }
`;

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

  @media (min-width: 768px) {
    top: 8px;
    right: 8px;

    width: 30px;
    height: 30px;
  }
`;

export const ImageHovered = styled(PathSvg)`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(-33%) translateY(50%);
  width: 20px;
  height: 20px;
  fill: white;

  @media (min-width: 768px) {
    top: 8px;
    right: 8px;

    width: 30px;
    height: 30px;
  }
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;

  border-radius: ${(props) => props.theme.radius[5]};
  background-color: rgba(164, 69, 237, 0.25);

  @media (min-width: 768px) {
    width: 75px;
    height: 75px;
  }
`;

export const PartOfSpeechContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: ${(props) => props.theme.space[8]};

  @media (min-width: 768px) {
    margin-bottom: 43px;
  }
`;

export const PartOfSpeech = styled.h3`
  margin-right: 15px;

  font-style: italic;
  font-size: 18px;
  line-height: 1.21;
  font-weight: ${(props) => props.theme.weight.bold};

  @media (min-width: 768px) {
    margin-right: ${(props) => props.theme.space[8]};

    font-size: ${(props) => props.theme.size.XXN};
    line-height: 1.05;
    font-style: normal;
  }
`;

export const PartOfSpeechLine = styled.div`
  height: 1px;
  width: 100%;
  background-color: #3a3a3a;
`;

export const Meaning = styled.h4`
  margin-bottom: 17px;

  line-height: 1.21;
  color: #757575;
  font-size: ${(props) => props.theme.size.N};

  @media (min-width: 768px) {
    margin-bottom: 27px;

    font-size: ${(props) => props.theme.size.XN};
    line-height: 1.05;
  }
`;

export const MeaningList = styled.ul`
  margin-bottom: ${(props) => props.theme.space[6]};

  @media (min-width: 768px) {
    margin-bottom: 41px;
  }
`;

export const MeaningItem = styled.li`
  position: relative;

  margin-left: ${(props) => props.theme.space[4]};

  color: ${(props) => props.theme.color.text};

  &:not(:last-child) {
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

  @media (min-width: 768px) {
    margin-left: ${(props) => props.theme.space[5]};

    font-size: 18px;
    line-height: 1.33;
  }
`;

export const Example = styled.p`
  margin-top: 13px;

  color: ${(props) => props.theme.color.secondaryText};

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const SynonymsContainer = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 33px;

  @media (min-width: 768px) {
    margin-bottom: 43px;
  }
`;

export const SynonymsTitle = styled.h4`
  margin-right: ${(props) => props.theme.space[6]};

  font-size: ${(props) => props.theme.size.N};
  color: ${(props) => props.theme.color.secondaryText};
  line-height: 1.21;

  @media (min-width: 768px) {
    margin-right: ${(props) => props.theme.space[10]};

    font-size: ${(props) => props.theme.size.XXN};
    line-height: 1.05;
  }
`;

export const SynonymsItem = styled.p`
  font-size: ${(props) => props.theme.size.N};
  color: ${(props) => props.theme.color.hover};
  line-height: 1.21;

  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.size.XN};
    font-weight: ${(props) => props.theme.weight.bold};
    line-height: 1.05;
  }
`;

export const SourceContainer = styled.div`
  @media (min-width: 768px) {
    margin-top: 39px;

    display: flex;
    align-items: center;
  }
`;

export const SourceTitle = styled.h4`
  margin-top: ${(props) => props.theme.space[6]};
  margin-bottom: ${(props) => props.theme.space[2]};

  color: ${(props) => props.theme.color.secondaryText};
  text-decoration: underline;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-top: 0;
    margin-right: 25px;

    font-size: ${(props) => props.theme.size.S};
    line-height: 1.05;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Link = styled.p`
  margin-right: 9px;

  color: ${(props) => props.theme.color.text};

  border-bottom: 1px solid #757575;

  @media (min-width: 768px) {
    margin-right: ${(props) => props.theme.space[2]};

    font-size: ${(props) => props.theme.size.S};
    line-height: 1.05;
  }
`;
