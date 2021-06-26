import React from "react";
import * as yup from "yup";

//import PropTypes from "prop-types";

import { ErrorMessage, Formik, Form as FormikForm, Field } from "formik";


//import Form from "./components/form";
//import "Form.css";

import "./App.css";
import Main from "./components/form/Main";



const App = () => {

const handleSubmit = (user) => {
  setTimeout(() => {
    console.log(user);
    alert(JSON.stringify(user));
  }, 500);
};
const initialValues = {};
alert(JSON.stringify(initialValues))

const validations = yup.object().shape({name: yup.string().min(2, "o nome deve ter pelo menos 2 caracteres").required("Campo obrigatório"),
user: yup.string().email("o usuário deve ser um email válido").required("Campo obrigatório"),password: yup.string().min(8, "A senha deve conter pelo menos 8 caracteres").required("Campo obrigatório"),});


return(
  <div className="App">
    <Main>  
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validations}
    >
      <FormikForm className="Form">
        <h1 className="Form-Welcome">Bem-vindo! </h1>
        <h2 className="Form-Info">
          Digite os dados cadastrais para salvar no sistema.
        </h2>

        <div className="Form-Group">
          <Field
            autoFocus
            className="Form-Field"
            name="name"
            placeholder="nome"
            type="text"
          />
          <ErrorMessage className="Form-Error" component="span" name="name" />
        </div>

        <div className="Form-Group">
          <Field
            className="Form-Field"
            name="user"
            placeholder="usuário@example.com"
            type="text"
          />
          <ErrorMessage className="Form-Error" component="span" name="user" />
        </div>

        <div className="Form-Group">
          <Field
            className="Form-Field"
            name="password"
            placeholder="senha"
            type="password"
          />
          <ErrorMessage
            className="Form-Error"
            component="span"
            name="password"
          />
        </div>

        <button className="Form-Btn" type="submit">
          Salvar
        </button>
      </FormikForm>
    </Formik>
  

{/*Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
};
*/}
    </Main>
  </div>
)};

export default App;
