import { useState } from 'react';

export default function TodoItem({ todo, onComplete, onDelete, onEdit }) {
	const [isEditing, setIsEditing] = useState(false);
	const [editValue, setEditValue] = useState(todo.text);

	const handleConfirmEdit = () => {
		if (editValue.trim() !== '') {
			onEdit(todo.id, editValue);
		}
		setIsEditing(false);
	};

	const handleCancelEdit = () => {
		setEditValue(todo.text);
		setIsEditing(false);
	};

	if (isEditing) {
		return (
			<div className="todo-item edit-mode">
				<input
					type="text"
					value={editValue}
					onChange={(e) => setEditValue(e.target.value)}
					className="edit-input"
				/>
				<div className="todo-actions">
					<button onClick={handleConfirmEdit} className="action-btn check" title="Confirm">
						✔️
					</button>
					<button onClick={handleCancelEdit} className="action-btn delete" title="Cancel">
						❌
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className="todo-item">
			<span className={`todo-text ${todo.isCompleted ? 'completed' : ''}`}>
				{todo.text}
			</span>

			<div className="todo-actions">
				<button
					className="action-btn check"
					onClick={() => onComplete(todo.id)}
					disabled={todo.isCompleted}
				>
					{todo.isCompleted ? '☑' : '☐'}
				</button>

				<button
					className="action-btn edit"
					onClick={() => setIsEditing(true)}
					disabled={todo.isCompleted}
				>
					✎
				</button>

				<button
					className="action-btn delete"
					onClick={() => onDelete(todo.id)}
					disabled={!todo.isCompleted}
				>
					🗑
				</button>
			</div>
		</div>
	);
}