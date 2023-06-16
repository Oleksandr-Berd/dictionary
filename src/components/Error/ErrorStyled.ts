import styled from "styled-components"

export const Container = styled.div`
  padding-top: ${(props) => props.theme.space[5]};
  padding-left: ${(props) => props.theme.space[6]};
  padding-right: ${(props) => props.theme.space[6]};

  text-align: center;
`;

export const Error = styled.h3`
line-height: 1.5;
font-style: italic;
font-weight: ${props => props.theme.weight.bold};
color: ${props => props.theme.color.error};
`