// React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Syles CSS
import "./assets/css/styles.css";

// Componentes
import { ContadorApp } from "./components/ContadorApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContadorApp value={0} />
  </StrictMode>
);
