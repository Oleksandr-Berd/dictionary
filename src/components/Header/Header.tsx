import * as SC from "./HeaderStyled"

import { ReactComponent as LogoSvg } from "assets/icons/iconoir_book.svg"
import AppBar from "components/AppBar/AppBar";

const Header: React.FC = () => {
    return (<SC.Header>
        <LogoSvg />
        <AppBar/>
    </SC.Header> );
}
 
export default Header;