//index.js conecta el archivo html en carpeta public
//todo lo que pase en app es todo lo que voy a ver en mi aplicación
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
