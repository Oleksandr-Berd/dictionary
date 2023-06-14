import * as SC from "./SharedLayoutStyled"
interface IProps {
    children: React.ReactNode,
}

const SharedLayout: React.FC<IProps> = ({children}) => {
    return (<SC.CustomSharedLayout>{children}</SC.CustomSharedLayout> );
}
 
export default SharedLayout;