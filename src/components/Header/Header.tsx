import { useMediaQuery } from '@mui/material';

import * as SC from "./HeaderStyled"

import { ReactComponent as LogoSvg } from "assets/icons/iconoir_book.svg"
import { ReactComponent as LogoTabletSvg } from "assets/icons/logotablet.svg"


interface IProps {
    children: React.ReactNode,
}

const Header: React.FC<IProps> = ({ children }) => {
    
    const isMobile = useMediaQuery('(max-width:767px)')
    // const isTablet = useMediaQuery('(min-width:768px)')
    // const isDesktop = useMediaQuery('(min-width:1440px)')

    return (<SC.Header>
        {isMobile ? <LogoSvg /> :
       <LogoTabletSvg/>}
        {children}
    </SC.Header> );
}
 
export default Header;