
import { useState } from 'react'

import * as SC from "./AppBarStyled"

import { ReactComponent as MoonSvg } from "assets/icons/iconoir_half-moon.svg"
import FontMenu from 'components/FontMenu/FontMenu'

const AppBar = () => {

    const [font, setFont] = useState("sansSerif")

  

    const handleSelect = (eventKey: string) => {
        setFont(eventKey)
    }

    let fontLabel
    
    switch (font) {
        case "sansSerif":
            fontLabel = 'Sans Serif'
            break;
    
        case "serif":
            fontLabel = 'Serif'
            break;
        case "mono":
            fontLabel = 'Mono'
            break;
        default:
            fontLabel = "Sans Serif";
    }

    return (<SC.AppBar>
        <FontMenu handleSelect={handleSelect} fontLabel={fontLabel} />
        <button>toggle</button>
        <MoonSvg />
    </SC.AppBar>);
}

export default AppBar;