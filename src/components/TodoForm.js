import React, {useState} from "react";

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault(e);
        addTodo(value);
        setValue("");
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="todo-input" 
                placeholder="Input task..."
                value={value}
                onChange={(e) => setValue(e.target.value)}/>
            <button type="submit" className="todo-btn">Add Task</button>
        </form>
    )
}