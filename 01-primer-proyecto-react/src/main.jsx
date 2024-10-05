// React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Syles CSS
import "./assets/css/styles.css";

// Componentes
import { PrimerComponente } from "./components/PrimerComponente";
import { Variables } from "./components/Variables";
import { Propiedades } from "./components/Propiedades";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PrimerComponente />
    <Variables />
    <Propiedades titulo="Curso de ReactJS" subtitulo="Esta es la sección de props" creditos={4} />
    <Propiedades />
  </StrictMode>
);
