import styled from "styled-components";

export const CustomSharedLayout = styled.div`
  min-width: ${(props) => props.theme.width.mobile};

  @media (min-width: 768px) {
    min-width: ${(props) => props.theme.width.tablet};
  }

  @media (min-width: 1440px) {
    min-width: ${(props) => props.theme.width.desktop};

    padding-right: 352px;
    padding-left: 351px;
  }
`;
