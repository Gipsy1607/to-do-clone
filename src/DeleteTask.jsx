import React from 'react'

function DeleteTask() {

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    };
  return (
    <div>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  )
}

export default DeleteTask
