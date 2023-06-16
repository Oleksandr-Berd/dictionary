import styled from "styled-components"
import { BiSearchAlt } from "react-icons/bi";


export const Form = styled.form`
  position: relative;

  margin-left: ${(props) => props.theme.space[6]};
  margin-right: ${(props) => props.theme.space[6]};
`;

export const Input = styled.input`
  width: ${(props) => props.theme.percentage[10]};

  padding-top: 15px;
  padding-bottom: 14px;
  padding-left: ${(props) => props.theme.space[6]};

  font-size: ${(props) => props.theme.size.N};
  font-weight: ${(props) => props.theme.weight.bold};
  background-color: #1f1f1f;
  color: ${(props) => props.theme.color.white};

  border: 1px solid #000;
  border-radius: ${(props) => props.theme.radius[3]};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  &:hover,
  &:focus &:focus-within,
  &:focus-visible, &:active {
    border-color: #a445ed;
  }
`;

export const Icon = styled(BiSearchAlt)`
position: absolute;
top: 16px;
right: 24px;

width: 24px;
height: 24px;

color: ${props => props.theme.color.hover};
`

export const Error = styled.p`
color: ${props => props.theme.color.error};
`