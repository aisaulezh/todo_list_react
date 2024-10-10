import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faTrash} from "@fortawesome/free-solid-svg-icons";
import {faPen} from "@fortawesome/free-solid-svg-icons";

const TodoList = ({todos, setTodos, setEditTodo}) => {

    const handleComplete = (todo) => {
        setTodos(
            todos.map(item => {
                if (item.id === todo.id) {
                    return {...item, completed: !item.completed}
                }
                return item;
            })
        )
    }

    const handleEdit = ({id}) => {
        const findTodo = todos.find(todo => todo.id === id)
        setEditTodo(findTodo)
    }

    const handleDelete = ({id}) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (

        <div className="todo-list">

            {todos.map(todo => (
                <li className="list-item" key={todo.id}>

                    <div className="todo-item">

                        <input
                            type="text"
                            value={todo.title}
                            className={`list ${todo.completed ? "complete" : ""}`}
                            onChange={(event) => event.preventDefault()}
                        />

                        <div className="buttons">
                            <button className="task-button button-complete" onClick={() => handleComplete(todo)}>
                                <FontAwesomeIcon icon={faCheck}/>
                            </button>
                            <button className="task-button button-edit" onClick={() => handleEdit(todo)}>
                                <FontAwesomeIcon icon={faPen}/>
                            </button>
                            <button className="task-button button-delete" onClick={() => handleDelete(todo)}>
                                <FontAwesomeIcon icon={faTrash}/>
                            </button>
                        </div>

                    </div>

                </li>
            ))}

        </div>
    );
};

export default TodoList;