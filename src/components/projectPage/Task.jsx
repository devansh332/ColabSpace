import React from 'react'

function Task({task}) {
    const {taskName,status} = task
    console.log("task",task)
    return (
        <div>
            <h1>{taskName}</h1>
            <span>{status}</span>
        </div>
    )
}

export default Task
