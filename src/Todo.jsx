import React, { useState } from 'react'

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    const addTask = (e) => {
        e.preventDefault();
        if(input.trim()) {
            const newTask = {
                id: Date.now(),
                text: input.trim(),
            };
            setTasks([...tasks, newTask]);
            setInput("");
        }
    };

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <form onSubmit={addTask}>
                <input 
                    type="text" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                />
                <button type="submit">Add Task</button>
            </form>
            <ul>
                {tasks.map((task) =>
                (<div className='list'>
                    
                    <li key={task.id}>{task.text}</li>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Todo;