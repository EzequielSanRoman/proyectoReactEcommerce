import { useState } from "react";

const Form = () => {

  const [userDatar, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  console.log(userData);
  return (
    <div>
      <form action="">
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
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
