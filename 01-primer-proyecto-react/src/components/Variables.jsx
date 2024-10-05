/*********************** Variables ***********************/

//  Los tipos de datos basicos se mostraran sin porblema
const string = "Esto es un texto";
const number = 12345;
const array = ["Curso de React", "Youtube", 4, 10000];
const boolean = true;

// Las funciones, mostraran el valor que retornan, solo si se ejecutan
const funcion = () => 1 + 1;

// Los objetos no son hijos validos de React, solo en JSON (stringify)
const objeto = { nombre: "Curso de React", duracion: 4 };
const fecha = new Date();

// Componente Variables
export const Variables = () => {
  return (
    <>
      <h1>Variables en ReactJS</h1>
      <hr />
      <p>String: {string}</p>
      <p>Number: {number}</p>
      <p>Array: {array}</p>
      <p>Boolean: {boolean}</p>
      <p>Function: {funcion()}</p>
      <p>Objeto: {JSON.stringify(objeto)}</p>
      <p>Fecha: {JSON.stringify(fecha)}</p>
    </>
  );
};
