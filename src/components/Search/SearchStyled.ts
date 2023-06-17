import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";

export const Form = styled.form`
  position: relative;

  margin-left: ${(props) => props.theme.space[6]};
  margin-right: ${(props) => props.theme.space[6]};

  @media (min-width: 768px) {
    margin-left: 39px;
    margin-right: 40px;
  }

  @media (min-width: 1440px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const Input = styled.input`
  width: ${(props) => props.theme.percentage[10]};

  padding-top: 15px;
  padding-bottom: 14px;
  padding-left: ${(props) => props.theme.space[6]};

  font-size: ${(props) => props.theme.size.N};
  font-weight: ${(props) => props.theme.weight.bold};
  background-color: ${(props) => props.theme.color.input};
  color: ${(props) => props.theme.color.white};

  border: 1px solid #000;
  border-radius: ${(props) => props.theme.radius[3]};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  &:hover,
  &:focus &:focus-within,
  &:focus-visible,
  &:active {
    border-color: #a445ed;
  }

  @media (min-width: 768px) {
    padding-top: 22px;
    padding-bottom: 21px;

    font-size: ${(props) => props.theme.size.XN};
  }
`;

export const Icon = styled(BiSearchAlt)`
  position: absolute;
  top: 16px;
  right: 24px;

  width: 24px;
  height: 24px;

  color: ${(props) => props.theme.color.hover};

  @media (min-width: 768px){
    top:24px;
  }
`;

export const Error = styled.p`
  color: ${(props) => props.theme.color.error};
`;
