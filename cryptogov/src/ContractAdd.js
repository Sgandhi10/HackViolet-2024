import { useState, useEffect } from "react";
import {Box, Container} from "@mui/system";
import {Toolbar, Button, Typography, TextField, AppBar} from "@mui/material";
import App from "./App";

function ContractAdd(props) {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [status, setStatus] = useState("");
    const [cid, setCID] = useState("");
    const [hours, setHours] = useState("");
    const [cost, setCost] = useState("");

    //Collect all information from add contract text fields and add a new entry to the end of the contract dataset
    function handleConfirmAdd(event) {
        let newContract = {
            "name": name,
            "description": desc,
            "status": status,
            "cid": cid,
            "hoursWorked": parseFloat(hours),
            "cost": parseFloat(cost)
        };
        props.handleFinishAdd(event, newContract);
    }

    function changeName(event) {
        setName(event.target.value);
    }

    function changeDesc(event) {
        setDesc(event.target.value);
    }

    function changeStatus(event) {
        setStatus(event.target.value);
    }

    function changeCID(event) {
        setCID(event.target.value);
    }

    function changeHours(event) {
        setHours(event.target.value);
    }

    function changeCost(event) {
        setCost(event.target.value);
    }

    return (
        <Container className = "ContractList">
            <Box sx = {{display: "grid", marginTop: 2, border: 2, borderRadius: 2, padding: 2}}>
                <Typography position = "static" multiline="true" sx={{textAlign: "left", flexGrow : 1}}>
                    Add contract details:
                </Typography>
                <TextField position = "static" onChange = {changeName} variant="standard" multiline = {true} label = "name" sx={{textAlign: "left", width: "100%"}}></TextField>
                <TextField position = "static" onChange = {changeDesc} variant="standard" multiline = {true} label = "description" sx={{textAlign: "left", width: "100%"}}></TextField>
                <TextField position = "static" onChange = {changeStatus} variant="standard" multiline = {true} label = "status" sx={{textAlign: "left", width: "100%"}}></TextField>
                <TextField position = "static" onChange = {changeCID} variant="standard" multiline = {true} label = "CID" sx={{textAlign: "left", width: "100%"}}></TextField>
                <TextField position = "static" onChange = {changeHours} variant="standard" multiline = {true} label = "hours worked" sx={{textAlign: "left", width: "100%"}}></TextField>
                <TextField position = "static" onChange = {changeCost} variant="standard" multiline = {true} label = "cost" sx={{textAlign: "left", width: "100%"}}></TextField>
            </Box>
            <Box sx = {{marginTop: 2}}>
                <Button sx={{color: "black", backgroundColor: "#ffffff", border: 2, width:"50%", '&:hover' : {backgroundColor: "#c9c9c9"}}} size = "large" onClick = {handleConfirmAdd}>
                    Confirm
                </Button>
            </Box>
        </Container>
    )
}

export default ContractAdd;