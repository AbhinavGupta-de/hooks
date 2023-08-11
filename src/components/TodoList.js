import React from 'react';
import AddNewTask from './AddNewTask';

const TodoList = () => {
	const [todos, setTodos] = React.useState([
		{ text: 'Learn React', id: 1 },
		{ text: 'Climb Mt. Everest', id: 2 },
		{ text: 'Run a marathon', id: 3 },
		{ text: 'Feed the dogs', id: 4 },
	]);

	return (
		<div>
			<ul>
				{todos.map((todo) => {
					return <li key={todo.id}>{todo.text}</li>;
				})}
			</ul>
			<AddNewTask onAdd={setTodos} />
		</div>
	);
};

export default TodoList;
