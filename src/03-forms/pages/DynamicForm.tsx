import { Form, Formik } from "formik";
import * as Yup from "yup";
import formJson from "../data/custom-form.json";
import { MySelect, MyTextInput } from "../components";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();

  for (const validation of input.validations) {
    if (validation.type === "required") {
      schema = schema.required(validation.message);
      requiredFields[input.name] = true;
    }

    if (validation.type === "minLength") {
      schema = schema.min(validation.value as any, validation.message);
    }

    if (validation.type === "email") {
      schema = schema.email(validation.message);
    }
  }
  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {(formik) => (
          <Form>
            {formJson.map(({ label, name, type, placeholder, options }) => {
              if (type === "input" || type === "password" || type === "email") {
                return (
                  <MyTextInput
                    key={name}
                    label={label}
                    placeholder={placeholder}
                    name={name}
                    type={type as any}
                  />
                );
              } else if (type === "select") {
                return (
                  <MySelect key={name} label={label} name={name}>
                    {options?.map(({ id, value, label }) => (
                      <option key={id} value={value}>
                        {label}
                      </option>
                    ))}
                  </MySelect>
                );
              }
            })}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
