import styled from "styled-components"

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  padding-top: ${(props) => props.theme.space[6]};
  padding-right: ${(props) => props.theme.space[6]};
  padding-left: ${(props) => props.theme.space[6]};
  padding-bottom: ${(props) => props.theme.space[6]};

  @media (min-width: 768px) {
    padding-top: 60px;
    padding-right: ${(props) => props.theme.space[10]};
    padding-left: ${(props) => props.theme.space[10]};
    padding-bottom: 54px;
  }

  @media (min-width: 1440px) {
    padding-top: 58px;
    padding-right: 0;
    padding-left: 0;
    padding-bottom: 51px;
  }
`;