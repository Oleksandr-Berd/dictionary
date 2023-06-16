import * as SC from "./ErrorStyled"

interface IProps{
    error: string | null,
}

const ErrorComponent:React.FC<IProps> = ({error}) => {
    return (<SC.Container><SC.Error>{error}</SC.Error></SC.Container> );
}
 
export default ErrorComponent;