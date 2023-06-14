import { ToggleButton } from "react-bootstrap"
import styled from "styled-components"

export const AppBar = styled.div`
display: flex;
align-items: center;
`

export const CustomToggleButton = styled(ToggleButton)`
  padding: 0;
  margin-right: ${props => props.theme.space[3]};

  background-color: ${(props) => props.theme.color.background};

  border: none;

  &&&{
    background-color: transparent;
    border-color: transparent;
  }
`;
