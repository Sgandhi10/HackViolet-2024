import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContractList from './ContractList.js';
import ContractDetails from './ContractDetails.js';
import {Box, Container} from "@mui/system";
import {Toolbar, Button, Typography, AppBar} from "@mui/material";

//dmumy
const dummyData = {
    "contracts": [{
        "name": "gisaflrbr",
        "description": "descrrepi",
        "status": "working",
        "cid": 1,
        "hoursWorked": 23,
        "cost": 30004
    },
        {
            "name": "argagaga",
            "description": "r",
            "status": "broken",
            "cid": 30,
            "hoursWorked": 1,
            "cost": 3
        },
        {
            "name": "dumy 3",
            "description": "idiot",
            "status": "kaput",
            "cid": 3,
            "hoursWorked": 10000,
            "cost": 50000000000000
        }]
};

export default function MainPage() {

    const [selectedContract, setSelectedContract] = useState(null); //Currently selected/clicked contract box

    const navigate = useNavigate();

    //Called when logout button is pushed; logs out user and returns to logout page
    function handleLogOut(){
        navigate("/")
    }

    function handleContractClick(event){
        const index = event.target.id;
        console.log(dummyData.contracts[index].name);
        setSelectedContract(dummyData.contracts[index]);
    }

    return ( <Container className="App">
    <Box>
        <AppBar position="static">
            <Toolbar sx = {{whiteSpace: "pre-line", background: "linear-gradient(to right, #3873db, #9656c8);"}}>
                <Typography sx={{ fontFamily: 'arial', mr: 2, flexGrow: 1 }}>
                    CryptoGov
                </Typography>
                <Typography sx={{ fontFamily: 'arial', mr: 4}}>
                    {"user: " + "user" + "\n" +"hourly wage: " + "number"}
                </Typography>
                <Button color = "inherit" onClick = {handleLogOut} sx={{ fontFamily: 'arial'}}>
                    Log out
                </Button>
            </Toolbar>
        </AppBar>
    </Box>
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'}}>
        <ContractList
            sx={{bgcolor: 'white', width: '100%', height: '100%'}}
            clickHandler = {handleContractClick}
            dummyData = {dummyData}
            />

            <ContractDetails
                sx={{width: '100%', height: '100%'}}
                data = {selectedContract}
            />
        </Box>
    </Container>
    );
}
