import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import './LogIn.css';
import { VERIFIED_USERS } from './Users';

export default function Login() {
    const [privKey, setPrivKey] = useState("")
    const [pubKey, setPubKey] = useState("")
    
    //Navigate function to transition between pages 
    const navigate = useNavigate();

    //Function for when the log in button is pressed
    const onButtonClick = () => {
       var verified = false
        
       VERIFIED_USERS.users.map((user, i) => {
            if (user.privkey === privKey && user.pubkey === pubKey) {
                verified = true;
            }
        });

        //When verified navigate and when not alert 
        if (verified) {
            navigate("/loginPass")
            
        } else {
            alert("Not a verified public or private key")
        }
    }

    return <div className={"pageContainer"}>
    <div className={"titleContainer"}>
        <div>CryptoGov</div>
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
            value={privKey}
            placeholder="Enter your Private Key"
            onChange={ev => setPrivKey(ev.target.value)}
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
