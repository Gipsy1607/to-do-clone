import React, { useState } from 'react'
import './Todo.css'

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
        }}
    return (
    <div>
        <h1>To-Do List</h1>
         <form onSubmit={addTask}>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button type="submit">Add Task</button>
         </form>
         <ul>{tasks.map((task) =>
         (<div className='list'>
            <input type="checkbox"/>
            <li key={task.id}>{task.text}</li>
         </div>))}
         </ul>
    </div>
)}

export default Todo;