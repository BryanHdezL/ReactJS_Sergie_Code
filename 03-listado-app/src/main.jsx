// React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Syles CSS
import "./assets/css/styles.css";

// Componentes
import { ListadoApp } from "./components/ListadoApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ListadoApp />
  </StrictMode>
);
