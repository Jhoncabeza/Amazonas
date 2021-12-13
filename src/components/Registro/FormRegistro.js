import { ButtonFormRegistro, DivForm, ImgLogo } from "../../styles/styled"
import * as Yup from 'yup'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { FormGroup, Row, Col } from 'reactstrap'

const formSchema = Yup.object().shape({
    Nombre: Yup.string()
        .min(5, `Minimo 5 caracteres`)
        .max(25, `Maximo 25 caracteres`)
        .required("Ingrese su nombre"),
    Correo: Yup.string()
        .required("Ingrese su correo electrónico")
        .email("La dirección de e-mail no es válida")
        .max(255, `Maximo 255 caracteres`),
    Contraseña: Yup.string()
        .required("Ingrese su contraseña")
        .min(6, `La contraseña debe contener al menos seis caracteres`)
});


const FormRegistro = () => {
    return (
        <DivForm>
            <ImgLogo src="https://res.cloudinary.com/dxgmhyliz/image/upload/v1639017796/Amazonas/logo-amazon_sd8n8m.png" alt="Logo" />
            <Formik
                initialValues={{
                    Nombre: "",
                    Correo: "",
                    Contraseña: ""
                }}
                validationSchema={formSchema}

                onSubmit={values => console.log(values)}
            >
                <Form>
                    <FormGroup>
                        <label htmlFor="Nombre">
                            Tu Nombre:
                        </label>
                        <Field
                            name="Nombre"
                            placeholder=""
                            type="text"
                        />
                        <ErrorMessage
                            name="Nombre"
                            component="div"
                        />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="Correo">
                            Correo electrónico:
                        </label>
                        <Field
                            name="Correo"
                            placeholder=""
                            type="email"
                        />
                        <ErrorMessage
                            name="Correo"
                            component="div"
                        />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="Contraseña">
                            Contraseña:
                        </label>
                        <Field
                            name="Contraseña"
                            placeholder=""
                            type="password"
                        />
                        <ErrorMessage
                            name="Contraseña"
                            component="div"
                        />
                    </FormGroup>
                    <Row>
                        <Col>
                            <ButtonFormRegistro
                                type="submit">
                                Crea tu cuenta de Amazonas
                            </ButtonFormRegistro>
                        </Col>
                    </Row>


                </Form>

            </Formik>

        </DivForm>
    )
}

export default FormRegistro
