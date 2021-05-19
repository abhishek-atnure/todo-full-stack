import React, { useState, useEffect } from 'react';
import "./todoList.css"
import Todo from "../../components/todo/Todo";

export default function TodoList({ user, click }) {
    const [todos, setTodos] = useState([]);


    const user_id = user;

    useEffect(() => {
        fetchTodos()
    });


    const fetchTodos = async () => {
        try {

            const response = await fetch(`/api/todo/${user_id}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            });
            const data = await response.json();
            setTodos(data);

        } catch (error) {
            console.log(error.message)
        }
    }




    return (
        <div>
            <span id="todo-list-head">Your todo list</span>
            <div className="todo-List">
                {todos.length === 0 ? <h4 id="notodos">No todos</h4> : (todos.map(todo => (
                    <Todo key={todo.id} todo={todo} user_id={user_id} />
                )))}
            </div>
        </div>
    )
}
