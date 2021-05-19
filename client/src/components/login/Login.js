import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom"
import "./login.css";

toast.configure();
export default function Login({ setAuth }) {
    const [data, setData] = useState({
        email: "",
        password: "",
    });


    const { email, password } = data;

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const body = { email, password };
            const response = await fetch("/api/user/login",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                })

            const data = await response.json();
            console.log(data)
            localStorage.setItem("token", data.token);
            if (data.token) {
                setAuth(true)
                toast.dark('Logged in!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            toast.dark(data, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        } catch (error) {
            console.log(error.message)

        }

    }
    return (
        <div className="right">
            <span id="home"><Link to="/" >Home</Link></span>
            <form onSubmit={handleSubmit}>
                <section className="copy">
                    <h2 id="log-in-text">Log in</h2>
                    <div className="login-container">
                        <p id="line-text">
                            Don't have an account?{" "}

                            <strong><Link to="/signup" >Sign Up</Link></strong>


                        </p>

                    </div>
                </section>
                <div className="input-container email">
                    <label htmlFor="email"> Email Id</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => handleChange(e)}
                        placeholder="your email id"
                        required
                    ></input>
                </div>

                <div className="input-container password">
                    <label htmlFor="password"> Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e) => handleChange(e)}
                        placeholder="your password"
                        required
                    ></input>
                </div>


                <button className="signup-btn" >
                    Log in
                </button>
            </form>
        </div>
    )
}
