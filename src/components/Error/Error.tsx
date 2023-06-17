import * as SC from "./ErrorStyled"
import {ReactComponent as ErrorSvg} from "assets/icons/error.svg"

interface IProps{
    error: string | null,
}

const ErrorComponent:React.FC<IProps> = ({error}) => {
    return (<SC.Container>
        <ErrorSvg/>
        <SC.Error>{error}</SC.Error>
    </SC.Container>);
}
 
export default ErrorComponent;