import { Formik, Form } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";
import { MyTextInput } from "../components";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          firstName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("El correo no tiene un formato válido")
            .required("Requerido"),
          password: Yup.string()
            .min(6, "Debe de tener al menos 6 caracteres")
            .required("Requerido"),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password")], "Las contraseñas no coinciden")
            .required("Requerido"),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput label="First Name" name="firstName" type="text" />
            <MyTextInput label="Email" name="email" type="email" />
            <MyTextInput label="Password" name="password" type="password" />
            <MyTextInput
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />

            <button type="submit">Submit</button>
            <button type="reset" onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
