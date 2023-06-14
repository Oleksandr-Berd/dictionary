
interface IProps {
    children: React.ReactNode,
}

const SharedLayout: React.FC<IProps> = ({children}) => {
    return (<div>{children}</div> );
}
 
export default SharedLayout;