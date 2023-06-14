import { Dropdown } from "react-bootstrap";

interface IProps {
    handleSelect: (eventKey: any) => void,
    fontLabel:string,
}

const FontMenu:React.FC<IProps> = ({handleSelect, fontLabel}) => {
    return (<div>
        <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {fontLabel}
            </Dropdown.Toggle>
            <Dropdown.Menu >
                <Dropdown.Item eventKey={'sansSerif'} onChange={handleSelect}>Sans Serif</Dropdown.Item>
                <Dropdown.Item eventKey={'serif'} onChange={handleSelect}>Serif</Dropdown.Item>
                <Dropdown.Item eventKey={'mono'} onChange={handleSelect}>Mono</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div> );
}
 
export default FontMenu;