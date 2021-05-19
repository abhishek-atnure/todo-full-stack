import React from 'react'
import { Link } from "react-router-dom";
import "./welcome.css";
import illus from "./wavy.jpg"

export default function Welcome() {
    return (
        <div className="welcome-page">
            <h1 id="intro">welcome to my pern to-do app</h1>


            <div className="login-signup">

                <button><Link to="/login" >Login</Link></button>
                <button><Link to="/signup" >Signup</Link></button>
            </div>

            <img src={illus} className="background" alt="illus" />
        </div>
    )
}
