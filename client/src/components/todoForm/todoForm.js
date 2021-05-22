import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import TodoList from '../../features/todoList/TodoList';
import "./todoForm.css";

export default function TodoForm({ setAuth }) {
    const [user, setUser] = useState('')
    const [data, setData] = useState({
        description: "",
        date: ""
    });
    const [click, setClick] = useState(Boolean)

    const { description, date } = data;

    useEffect(() => {
        isUser()
    }, [])
    const isUser = async () => {
        try {
            const response = await fetch(
                "/api/auth/dashboard",
                {
                    method: "GET",
                    headers: { token: localStorage.token },
                }
            );
            const data = await response.json();

            setUser(data);
        } catch (error) {
            console.error(error.message);
        }
    };




    const chanageType = () => {
        document.getElementById("date-input").setAttribute("type", "date")
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
        // window.location = "/";
        setAuth(false)
    }

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        setClick(false)
        try {
            const body = { description, date };
            console.log(body)
            const response = await fetch(`/api/todo/${user}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                })

            const data = await response.json();
            setClick(true)

        } catch (error) {
            console.log(error.message)
        }

    }

    return (
        <div className="todo-form">
            <div className="todo-nav">
                <h3>To <span id="logoSpan">Do</span></h3>
                <Link to="/"><span onClick={handleLogout}>Log Out</span></Link>
            </div>

            <div className="todo-add">
                <h4>Create Your To-Do</h4>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="description"
                        value={description}
                        onChange={handleChange}
                        id="form-input"
                        placeholder="Enter todo..."
                    ></input>

                    <input
                        id="date-input"
                        name="date"
                        value={date}
                        onChange={handleChange}
                        type="text"
                        placeholder="Complete it by..."
                        onFocus={() => chanageType()}
                    ></input>

                    <button id="todo-submit-btn">Submit</button>
                </form>
            </div>
            <TodoList user={user} click={click} />
        </div>
    )
}
