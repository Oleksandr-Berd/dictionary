import { useFormik } from "formik";
import * as Yup from 'yup';

import * as SC from "./SearchStyled"
import { useEffect } from "react";

interface IValue{
    query: "";
}

interface IProps{
    submit:(query:string)=>void
}

const InputDataSchema = Yup.object({
    query: Yup.string()
        .required('Whoops, can’t be empty…')
        .min(2, 'Whoops, can’t be empty…')
        .max(50, 'Query cannot exceed 50 characters'),
});


const Search:React.FC<IProps> = ({submit}) => {

    const formik = useFormik<IValue>({
        initialValues: {
            query: "",
            
        },
        validationSchema: InputDataSchema,
        onSubmit: (values) => {
            console.log(values);
        }
    });

    const handleValuesChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {


        setTimeout(() => { formik.handleChange(evt) }, 500)
    }

    useEffect(() => {
        if (formik.values.query !== "") submit(formik.values.query)
        
    }, [formik.values.query, submit])
    

    const queryError = formik.errors.query ? formik.errors.query : null;

    return (
        <SC.Form>
            <SC.Input type="text" name="query" placeholder="Search for any word…" onChange={handleValuesChange}/>
            <SC.Icon />
            {queryError ? <SC.Error>{formik.errors.query}</SC.Error> : null}
        </SC.Form>
    );
}
 
export default Search;