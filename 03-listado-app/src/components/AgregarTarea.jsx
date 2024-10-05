// React
import { useState } from "react";

// Componente Agregartarea
export const AgregarTarea = ({ agregarTarea }) => {
  // Hooks
  const [inputValue, setInputValue] = useState("");

  // Funciones
  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    agregarTarea(inputValue);
    setInputValue("");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Ingresá una tarea nueva"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    </>
  );
};
