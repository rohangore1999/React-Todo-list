import React from 'react'

// here we use directly the passed values
export const TodoItem = ({ todo, onDelete }) => {
    return (
        <>
            <div>
                <h4>{todo.title}</h4>
                <p>{todo.desc}</p>
                {/* Here we use ()=> { } arrow function because it will pass function; onClick{onDelete(todo)} then
            it will call the function as soon as it will reload/render  */}
                <button className="btn btn-sm btn-danger" onClick={() => { onDelete(todo) }}>Delete</button>
            </div>
            <hr />
        </>
    )
}
