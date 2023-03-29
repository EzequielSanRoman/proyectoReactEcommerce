import { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);

    if (userData.name.length < 5) {
      console.log("usuario no es valido");
      setError(true);
      setErrorMessage("El nombre  no es válido, debe tener 8 caracteres o más");
      return;
    }
    const incluye = userData.email.includes("@");
    if (!incluye) {
      console.log(" el correo no es valido");
      setError(true);
      setErrorMessage("El mail no es válido, debe tener @");
      return;
    }

    const str = userData.password.trim();
    const passwordIsValid = userData.password === str;

    if (!passwordIsValid || userData.password.length < 8) {
      console.log(
        "la contraseña no debe tener espacios ni debe ser menor a 8 caracteres"
      );
      setError(true);
      setErrorMessage("La contraseña no es válida");
      return;
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          onChange={handleChange}
          name="name"
        />

        <input
          type="text"
          placeholder="ingresá tu email"
          name="email"
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Ingresa tu contraseña"
          onChange={handleChange}
          name="password"
        />
        <button type="submit">Enviar</button>
      </form>
      {error && <h1>{errorMessage}</h1>}
    </div>
  );
};

export default Form;
