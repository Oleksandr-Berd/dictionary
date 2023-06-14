
import { useState } from 'react'

import * as SC from "./AppBarStyled"

import { ReactComponent as MoonSvg } from "assets/icons/iconoir_half-moon.svg"
import FontMenu from 'components/FontMenu/FontMenu'

interface IProps {
    handleSelect: (eventKey: any) => void,
    fontLabel: any,
}

const AppBar:React.FC<IProps> = ({ handleSelect, fontLabel }) => {
    console.log(fontLabel);
    
    
    return (<SC.AppBar>
        <FontMenu handleSelect={handleSelect} fontLabel={fontLabel} />
        <button>toggle</button>
        <MoonSvg />
    </SC.AppBar>);
}

export default AppBar;