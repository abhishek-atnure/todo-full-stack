import React, { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom"
import "./signup.css";

toast.configure();
export default function Signup({ setAuth }) {
    const [data, setData] = useState({
        fname: "",
        email: "",
        password: "",
    });

    const { fname, email, password } = data;
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const body = { fname, email, password };
            const response = await fetch("/api/user/signup",
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
                toast.dark('Registered!', {
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
            <Link to="/" id="home">Home</Link>
            <form required onSubmit={handleSubmit}>
                <section className="copy">
                    <h2 id="signup-h2">Sign up</h2>
                    <div className="login-container">
                        <p id="signup-p">
                            Already have an account?{" "}
                            <a to="/login" id="signup-a">
                                <strong><Link to="/login" >Log in</Link></strong>
                            </a>
                        </p>
                    </div>
                </section>
                <div className="input-container name">
                    <label htmlFor="fname"> Full Name</label>
                    <input
                        id="fname"
                        name="fname"
                        type="text"
                        placeholder="your name"
                        value={fname}
                        onChange={handleChange}
                        required
                    ></input>
                </div>

                <div className="input-container email">
                    <label htmlFor="email"> Email Id</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your email id"
                        value={email}
                        onChange={handleChange}
                        required
                    ></input>
                </div>

                <div className="input-container password">
                    <label htmlFor="password"> Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="your password"
                        value={password}
                        onChange={handleChange}
                        required
                    ></input>
                </div>
                <a to="/todos" >
                    <button className="signup-btn" >
                        Sign Up
          </button> </a>
            </form>
        </div>
    )
}
