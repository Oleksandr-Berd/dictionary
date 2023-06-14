import { Dropdown } from "react-bootstrap"
import styled from "styled-components"

export const FontMenu = styled.div`
margin-right: ${props => props.theme.space[4]};
`

export const CustomDropdown = styled(Dropdown.Toggle)`
  display: flex;
  align-items: center;

  padding-right: ${(props) => props.theme.space[4]};

  background: transparent;

  border: none;
  border-radius: 0;
  border-right: 1px solid #e9e9e9;

  /* &:hover,
  &:focus,
  &:checked {
    background-color: transparent;
    border-right: 1px solid #e9e9e9;
    color: ${(props) => props.theme.color.auth};
  } */

  &&& {
    background-color: transparent;
    border-right: 1px solid #e9e9e9;
  }
`;

export const ToggleTitle = styled.h3`
  margin-right: ${(props) => props.theme.space[4]};

  font-weight: ${props => props.theme.weight.bold};
  font-size: ${props => props.theme.size.S};
  line-height: 1.71;
`;