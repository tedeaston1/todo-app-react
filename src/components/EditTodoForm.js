import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault(e);
    editTodo(value, task.id);
  };

  return (
    <div className="edit-todo-container">
      <form className="edit-todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="edit-todo-input"
          placeholder="Update task..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="edit-todo-btn">
          Update
        </button>
      </form>
    </div>
  );
};
