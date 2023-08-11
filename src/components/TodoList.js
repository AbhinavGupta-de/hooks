import React from 'react';

const TodoList = () => {
	const [todos, setTodos] = React.useState([
		{ text: 'Learn React', id: 1 },
		{ text: 'Climb Mt. Everest', id: 2 },
		{ text: 'Run a marathon', id: 3 },
		{ text: 'Feed the dogs', id: 4 },
	]);
	const [task, setTask] = React.useState('');

	const handleTask = (event) => {
		setTask(event.target.value);
	};

	const addTask = () => {
		if (task.trim() !== '') {
			const newTodo = { text: task, id: Math.random() };
			setTodos([...todos, newTodo]);
			setTask('');
		}
	};

	return (
		<div>
			<ul>
				{todos.map((todo) => {
					return <li key={todo.id}>{todo.text}</li>;
				})}
			</ul>
			<form onSubmit={(e) => e.preventDefault()}>
				<input
					type="text"
					placeholder="Task..."
					value={task}
					onChange={handleTask}
				/>
				<button onClick={addTask}>Add Task</button>
			</form>
		</div>
	);
};

export default TodoList;
