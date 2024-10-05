/*********************** Hooks ***********************/

// React
import { useState } from "react";

// Componente ContadorApp
export const ContadorApp = ({ value }) => {
  // Hooks
  const [contador, setContador] = useState(value);

  // Controlador del evento de click
  const handleClickSum = () => {
    setContador(contador + 10);
    console.log(contador);
  };
  const handleClickRes = () => {
    setContador(contador - 10);
    console.log(contador);
  };

  return (
    <>
      <h1>Hooks</h1>
      <hr />
      <p>Valor del contador: <span>{contador}</span> </p>
      <div className="botones">
        <button onClick={handleClickSum}>+10</button>
        <button onClick={handleClickRes}>-10</button>
      </div>
    </>
  );
};
