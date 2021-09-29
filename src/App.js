// import logo from './logo.svg';
import './App.css';

// created using rfc
import Header from './MyComponents/Header';

// created using rafc a () => { } arrow function
import { Todos } from './MyComponents/Todos';
import { AddTodo } from './MyComponents/AddTodo';
import { Footer } from './MyComponents/Footer';
import { About } from './MyComponents/About'
// HOOKS
import React, { useEffect, useState } from 'react';

// React Router Dom
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  let initTodo;
  // 
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }


  // addTodo get title, decs from AddTodo.js
  const addTodo = (title, desc) => {
    console.log('Im adding todo', title, desc)
    let sno

    if (todos.length === 0) {
      sno = 0
    }
    else {
      // In sno we are taking last sno i.e(todos[todo.length-1].sno)) + 1
      sno = todos[todos.length - 1].sno + 1;
    }

    // making json
    const MyTodo = {
      sno: sno,
      title: title,
      desc: desc
    }

    // append MyTodo to todos list
    setTodos([...todos, MyTodo])
    console.log(MyTodo)

    localStorage.setItem("todos", JSON.stringify(todos))
  }




  const onDelete = (todo) => {
    console.log("IM ON DELETE", todo)

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos))
  }


  // FOR initial state when app initilized and todos will be loaded in "todos" var
  const [todos, setTodos] = useState(initTodo);


  // whenever there will be changes in [todos] useeffect will execute localstorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])



  return (
    <>
      <Router>
        <Header title="MY TODOS LIST" />

        {/* under HOME => "/" Switch use so that all the components for which it will not reload */}
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                {/* addTodo={addTodo}; passing above func to AddTodo component */}
                <AddTodo addTodo={addTodo} />

                {/* App.js is Parent; passing two values todos as json obj and onDelete */}
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

        </Switch>


        <Footer />
      </Router>
    </>
  );
}

export default App;
