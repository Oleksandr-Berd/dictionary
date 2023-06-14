import { Dropdown } from "react-bootstrap";

import * as SC from "./FontMenuStyled"

interface IProps {
    handleSelect: (eventKey: any) => void,
    fontLabel:string,
}

const FontMenu:React.FC<IProps> = ({handleSelect, fontLabel}) => {
    return (<SC.FontMenu>
        <Dropdown onSelect={handleSelect}>
            <SC.CustomDropdown variant="success" id="dropdown-basic">
                <SC.ToggleTitle>{fontLabel}</SC.ToggleTitle>
            </SC.CustomDropdown>
            <Dropdown.Menu >
                <SC.DropDownItem eventKey={'sansSerif'} onChange={handleSelect}>Sans Serif</SC.DropDownItem>
                <SC.DropDownItem eventKey={'serif'} onChange={handleSelect}>Serif</SC.DropDownItem>
                <SC.DropDownItem eventKey={'mono'} onChange={handleSelect}>Mono</SC.DropDownItem>
            </Dropdown.Menu>
        </Dropdown>
    </SC.FontMenu> );
}
 
export default FontMenu;