import React, { useState } from 'react'
import './Todo.css'

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");
    const [checked, setChecked] = useState(false);
    const [deleteVisible, setDeleteVisible] = useState(false);

    const addTasks = (e) => {
        e.preventDefault();
        if(input.trim()) {
            const newTask = {
                id: Date.now(),
                text: input.trim(),
            };
            setTasks([...tasks, newTask]);
            setInput("");
        }}
        const toggleCheckbox = () => {
            setChecked(!checked);
            setDeleteVisible(!deleteVisible);
        };

        const handleDelete = () => {
            console.log('Deleted');
         };
        
return (
    <div>
        <h1>To-Do List</h1>
         <form onSubmit={addTasks}>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button type="submit">Add Task</button>
         </form>
         <ul>{tasks.map((tasks) =>
         (<div className='list'>
            <input type="checkbox" onChange={toggleCheckbox()}/>
            <li key={tasks.id}>{tasks.text}</li>
            {deleteVisible && (
            <button onClick={handleDelete}>Delete</button>)}
         </div>))}
         </ul>
    </div>
)
}

export default Todo;