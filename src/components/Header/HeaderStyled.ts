import styled from "styled-components"

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  padding-top: ${(props) => props.theme.space[6]};
  padding-right: ${(props) => props.theme.space[6]};
  padding-left: ${(props) => props.theme.space[6]};
  padding-bottom: ${(props) => props.theme.space[6]};
`;