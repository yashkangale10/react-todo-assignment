import { useState } from 'react';

export default function TodoInput({ onAddTodo }) {
	const [inputValue, setInputValue] = useState('');

	const handleAdd = () => {
		if (inputValue.trim() === '') return;
		onAddTodo(inputValue);
		setInputValue('');
	};

	return (
		<div className="input-section-card">
			<div className="input-wrapper">
				<div className="input-icon">
					&#128190;
				</div>
				<input
					type="text"
					placeholder="New Todo"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					className="todo-input"
				/>
			</div>
			<button onClick={handleAdd} className="add-button">
				Add new task
			</button>
		</div>
	);
}