import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

//import "./Login.css";

export default function Login(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    
    //Navigate function to transition between pages 
    const navigate = useNavigate();
    
    //Change color of page 
    //useEffect(() => {
        //document.body.style.backgroundColor = 
      //}, [])

    //Login submit button 
    const onButtonClick = () => {
        navigate("/loginPass")
    }

    return <div className={"mainContainer"}>
    <div className={"titleContainer"}>
        <div>Login</div>
    </div>
    <br />
    <div className={"inputContainer"}>
        <input
            value={email}
            placeholder="Enter your email here"
            onChange={ev => setEmail(ev.target.value)}
            className={"inputBox"} />
        <label className="errorLabel">{emailError}</label>
    </div>
    <br />
    <div className={"inputContainer"}>
        <input
            value={password}
            placeholder="Enter your password here"
            onChange={ev => setPassword(ev.target.value)}
            className={"inputBox"} />
        <label className="errorLabel">{passwordError}</label>
    </div>
    <br />
    <div className={"inputContainer"}>
        <input
            className={"inputButton"}
            type="button"
            onClick={onButtonClick}
            value={"Log in"} />
    </div>
</div>

}
