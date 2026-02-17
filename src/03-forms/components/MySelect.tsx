import { ErrorMessage, useField } from "formik";
import "../styles/styles.css";

interface Props {
  label: string;
  name: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  [key: string]: any;
}

function MySelect({ label, ...props }: Props) {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      <ErrorMessage name={props.name} component="span" className="error" />
    </>
  );
}

export { MySelect };
