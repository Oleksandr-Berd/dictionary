import styled from "styled-components";
import { ReactComponent as PathSvg } from "assets/icons/Path 2.svg";

export const Container = styled.div`
  padding: 43px;
  padding-bottom: 40px;
  padding-left: 39px;
  padding-right: 40px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h3``;

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