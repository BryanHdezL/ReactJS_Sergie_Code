/*********************** Condicionales ***********************/

// React
import { useState } from "react";

// Componentes
import { Items } from "./Items";
import { AgregarTarea } from "./AgregarTarea";

// Componente ListadoApp
export const ListadoApp = () => {
  // Variables
  let listadoSecciones = [
    { id: 1, nombre: "Instalaciones necesarias", visto: true },
    { id: 2, nombre: "Uso de Vite", visto: true },
    { id: 3, nombre: "Componentes", visto: true },
    { id: 4, nombre: "Variables en JSX", visto: true },
    { id: 5, nombre: "Props", visto: true },
    { id: 6, nombre: "Eventos", visto: true },
    { id: 7, nombre: "useState", visto: true },
    { id: 8, nombre: "Redux", visto: false },
    { id: 9, nombre: "customHooks", visto: false },
  ];

  // Hooks
  const [arreglo, setArreglo] = useState(listadoSecciones);

  // Funciones
  const onAddTask = (valor) => {
    const nombreTarea = valor.trim()
    // Validacion para no aceptar valores vacios
    if (valor < 1) return;
    // Agrega una nueva tarea
    const nuevaTarea = {
      id: arreglo.length + 1,
      nombre: nombreTarea,
      visto: false,
    };
    setArreglo([...arreglo, nuevaTarea]);
  };

  return (
    <>
      <h1>ListadoApp</h1>
      <hr />
      <h2>Lista de temas del Curso</h2>
      <ol className="item">
        <AgregarTarea agregarTarea={onAddTask} />
        {arreglo.map((item) => (
          <Items key={item.id} nombre={item.nombre} visto={item.visto} />
        ))}
      </ol>
    </>
  );
};
