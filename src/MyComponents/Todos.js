import React from 'react'
import { TodoItem } from './TodoItem'

// here we use props to catch values; so whenever we have to access we use props.<value_passed>
export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className="text-center my-3">Todos List</h3>
            {/* for loop using MAP function; in that we pass single todo to TodosItem; KEY parameter in imp here */}
            {props.todos.length === 0 ? "No Todos to Display" :
                props.todos.map(
                    (todo) => {
                        return (<TodoItem key={todo.sno} todo={todo} onDelete={props.onDelete}/> )
                    }
                )
            }


        </div>
    )
}
