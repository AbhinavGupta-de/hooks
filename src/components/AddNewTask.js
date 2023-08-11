import React from 'react';

const AddNewTask = ({ onAdd }) => {
	// const [todos, setTodos] = React.useState([]);
	const [task, setTask] = React.useState('');

	const handleTask = (event) => {
		// console.log(event.target.value);
		setTask(event.target.value);
	};
	const addTask = () => {
		if (task.trim() !== '') {
			const newTodo = { text: task, id: Math.random() };
			// console.log(newTodo);
			onAdd((prevTodos) => {
				return [...prevTodos, newTodo];
			});
			setTask('');
		}
	};

	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					console.log(task);
				}}
			>
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

export default AddNewTask;
