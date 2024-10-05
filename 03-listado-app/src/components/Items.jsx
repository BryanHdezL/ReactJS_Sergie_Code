// Componente Items
export const Items = ({ nombre, visto }) => {
  return (
    <>
      <li>
        {nombre} → {visto ? "✅" : "❌"}
      </li>
    </>
  );
};
