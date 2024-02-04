import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import './LogIn.css';

export default function Login(props) {
    const [privKey, setPrivKey] = useState("")
    const [pubKey, setPubKey] = useState("")
    
    //Navigate function to transition between pages 
    const navigate = useNavigate();

    //Function for when the log in button is pressed
    const onButtonClick = () => {
        navigate("/loginPass")
    }

    return <div className={"pageContainer"}>
    <div className={"titleContainer"}>
        <div>CryptoGov</div>
    </div>
    <br />
    <div>
        <input
            value={privKey}
            placeholder="Enter your Private Key"
            onChange={ev => setPrivKey(ev.target.value)}
            className={"inputBox"} />
    </div>
    <br />
    <div>
        <input
            value={pubKey}
            placeholder="Enter your Public Key"
            onChange={ev => setPubKey(ev.target.value)}
            className={"inputBox"} />
    </div>
    <br />
    <div>
        <input
            className={"button"}
            type="button"
            onClick={onButtonClick}
            value={"Log in"} />
    </div>
</div>
}
