import { ErrorMessage, useField } from "formik";
import "../styles/styles.css";

interface Props {
  label: string;
  name: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  [key: string]: any;
}

function MyCheckbox({ label, ...props }: Props) {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <>
      <label htmlFor={props.id || props.name}>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>
      <ErrorMessage name={props.name} component="span" className="error" />
    </>
  );
}

export default MyCheckbox;
