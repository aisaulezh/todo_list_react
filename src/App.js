import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
    const [input, setInput] = useState('')
    const [todos, setTodos] = useState([])
    const [editTodo, setEditTodo] = useState(null)

    return (
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <Header/>
                </div>
                <div>
                    <Form
                        setInput={setInput}
                        editTodo={editTodo}
                        todos={todos}
                        setTodos={setTodos}
                        input={input}
                        setEditTodo={setEditTodo}
                    />
                </div>
                <div>
                    <TodoList
                        todos={todos}
                        setTodos={setTodos}
                        setEditTodo={setEditTodo}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
