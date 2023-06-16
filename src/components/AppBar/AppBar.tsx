
import { BsSun } from 'react-icons/bs'

import * as SC from "./AppBarStyled"

import { ReactComponent as MoonSvg } from "assets/icons/iconoir_half-moon.svg"
import FontMenu from 'components/FontMenu/FontMenu'
import darkToggle from "assets/icons/darktheme.png"
import lightToggle from "assets/icons/lighttheme.png"
interface IProps {
    handleSelect: (eventKey: any) => void,
    fontLabel: any,
    checked: boolean,
    handleToggle: () => void
}

const AppBar: React.FC<IProps> = ({ handleSelect, fontLabel, checked, handleToggle }) => {

    let toggleTheme

    if (checked) {
        toggleTheme = darkToggle
    } else {
        toggleTheme = lightToggle
    }

    return (<SC.AppBar>
        <FontMenu handleSelect={handleSelect} fontLabel={fontLabel} />
        <SC.CustomToggleButton
            id="toggle-check"
            type="checkbox"
            checked={checked}
            value="1"
            onChange={handleToggle}
        >
            <img src={toggleTheme} alt="toggle" />
        </SC.CustomToggleButton>
        {checked ? <MoonSvg /> : <BsSun size={20}/>}
    </SC.AppBar>);
}

export default AppBar;