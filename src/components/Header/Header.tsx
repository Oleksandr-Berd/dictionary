import * as SC from "./HeaderStyled"

import { ReactComponent as LogoSvg } from "assets/icons/iconoir_book.svg"

interface IProps {
    children: React.ReactNode,
}

const Header: React.FC<IProps> = ({children}) => {
    return (<SC.Header>
        <LogoSvg />
        {children}
    </SC.Header> );
}
 
export default Header;