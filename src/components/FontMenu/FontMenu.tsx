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
                <Dropdown.Item eventKey={'sansSerif'} onChange={handleSelect}>Sans Serif</Dropdown.Item>
                <Dropdown.Item eventKey={'serif'} onChange={handleSelect}>Serif</Dropdown.Item>
                <Dropdown.Item eventKey={'mono'} onChange={handleSelect}>Mono</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </SC.FontMenu> );
}
 
export default FontMenu;