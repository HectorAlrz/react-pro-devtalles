import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

function RegisterPage() {
  const {
    name,
    email,
    password,
    confirmPassword,
    onChange,
    resetForm,
    isValidEmail,
  } = useForm({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Register Page</h1>

      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
          className={name.trim().length <= 0 ? "has-error" : ""}
        />
        {name.trim().length <= 0 && <span>*Este campo es obligatorio</span>}
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
          className={!isValidEmail(email) ? "has-error" : ""}
        />
        {!isValidEmail(email) && <span>*Email no es válido</span>}

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
        />
        {password.trim().length <= 0 && <span>*Este campo es obligatorio</span>}
        {password.trim().length > 0 && password.trim().length < 6 && (
          <span>*La contraseña debe tener al menos 6 caracteres</span>
        )}

        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChange}
        />
        {confirmPassword.trim().length <= 0 && (
          <span>*Este campo es obligatorio</span>
        )}
        {confirmPassword.trim().length > 0 && confirmPassword !== password && (
          <span>*Las contraseñas no coinciden</span>
        )}

        <button type="submit">Register</button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
