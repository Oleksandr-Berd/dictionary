import { Dropdown } from "react-bootstrap"
import styled from "styled-components"

export const FontMenu = styled.div`
  margin-right: ${(props) => props.theme.space[4]};

 @media (min-width: 768px){
    margin-right: 26px;
 }
`;

export const CustomDropdown = styled(Dropdown.Toggle)`
  display: flex;
  align-items: center;

  padding-right: ${(props) => props.theme.space[4]};

  background: transparent;

  border: none;
  border-radius: 0;

  color: ${(props) => props.theme.color.hover};

  &&& {
    background-color: transparent;
    border-right: ${(props) => props.theme.color.border};
    color: ${(props) => props.theme.color.hover};
  }

  @media (min-width: 768px) {
    padding-right: 54px;
  }
`;

export const ToggleTitle = styled.h3`
  margin-right: ${(props) => props.theme.space[4]};

  font-weight: ${(props) => props.theme.weight.bold};
  font-size: ${(props) => props.theme.size.S};
  line-height: 1.71;
  color: ${(props) => props.theme.color.text};

  @media (min-width: 768px){


    font-size: 18px;
  }
`;

export const DropDownItem = styled(Dropdown.Item)`
  &:hover {
    color: ${(props) => props.theme.color.hover};
  }
`;
