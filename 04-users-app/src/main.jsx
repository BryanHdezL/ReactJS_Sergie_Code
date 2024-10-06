// React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Syles CSS
import "./assets/css/styles.css";

// Componentes
import { UsersApp } from "./components/UsersApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UsersApp />
  </StrictMode>
);
