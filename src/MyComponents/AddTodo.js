// HOOKS
import React, { useState } from 'react';

export const AddTodo = (props) => {
    // creating variable to store title and decs which user entered
    // here setTitle is like a function and title is parameter. eg: setTitle(e.target.value) => e.target.value is title
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const submit = (e) => {
        // to prevent from reloading after submitting
        e.preventDefault()
        if (!title || !desc) {
            alert("Title or Decs not blank")
        }
        else {
            // add todo
            props.addTodo(title, desc)
            setTitle("")
            setDesc("")
        }
    }

    return (
        <div className="container">
            <h3 className="text-center my-3">Add TODO</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Title</label>

                    {/* onChange={(e)=>{setTitle(e.target.value)}}; So that we can edit the input */}
                    {/* value={title} => here {title} data will stored in title variable */}
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Description</label>

                    {/* onChange={(e)=>{setTitle(e.target.value)}}; So that we can edit the input */}
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn sm btn-primary">Add</button>
            </form>
        </div>
    )
}
