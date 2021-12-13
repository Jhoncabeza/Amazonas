import { useFormik } from "formik";
import { AiOutlineSearch } from "react-icons/ai"
import { useDispatch } from "react-redux";
import { searchAsync } from "../../actions/actionData";
import * as Yup from 'yup';
import { ButtonSearch, Form, Input } from "../../styles/styled";

const Buscador = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            search: ''
        },
        validationSchema: Yup.object({
            search: Yup.string().required()
        }),
        onSubmit: ( {search} ) => {
            dispatch(searchAsync(search))
        }
    })

    return (
        <>
            <Form onSubmit={formik.handleSubmit}>
                <Input name="search" placeholder= "Buscar por nombre exacto del producto"onChange={formik.handleChange} />
                <ButtonSearch type="submit"><AiOutlineSearch /></ButtonSearch>
            </Form>
        </>
    )
}

export default Buscador
