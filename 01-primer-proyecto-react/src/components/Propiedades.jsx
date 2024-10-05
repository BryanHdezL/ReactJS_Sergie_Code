/*********************** Props ***********************/

// React
import PropTypes from "prop-types";

// Componente Propiedades
export const Propiedades = ({
  titulo = "Titulo del componente",
  subtitulo = "Subitulo del componente",
  creditos = 0,
}) => {
  return (
    <>
      <h1>Props</h1>
      <hr />

      <p>Titulo: {titulo}</p>
      <p>Subtitulo: {subtitulo}</p>
      <p>Creditos: {creditos + 1}</p>
    </>
  );
};

// Especificaciones de las propiedades
Propiedades.propTypes = {
  titulo: PropTypes.string,
  subtitulo: PropTypes.string,
  creditos: PropTypes.number,
};
