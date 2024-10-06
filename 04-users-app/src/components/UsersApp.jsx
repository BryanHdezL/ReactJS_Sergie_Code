// React
import { useState } from 'react';

// Componentes
import { UserList } from './UserList';

// Componente UsersApp
export const UsersApp = () => {
	//   Hooks
	const [endPoint, setEndPoint] = useState('users');

	// Controlador
	const handleFetch = () => {
		setEndPoint((prevEndPoint) => (prevEndPoint === 'users' ? 'comments' : 'users'));
	};

  // Almacena el nombre del siguinete endPoint
	const nextEndPoint = endPoint === 'users' ? 'comments' : 'users';

	return (
		<>
			<h1>Lista de usuarios</h1>
			<hr />
			<button onClick={handleFetch}>Cargar contenido endpoint '{nextEndPoint}'</button>
			<UserList endPoint={endPoint} />
		</>
	);
};
