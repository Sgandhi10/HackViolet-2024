import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContractList from './ContractList.js';
import ContractDetails from './ContractDetails.js';
import {Box, Container} from "@mui/system";
import {Toolbar, Button, Typography, AppBar} from "@mui/material";

export default function MainPage() {

    const [selectedContract, setSelectedContract] = useState(null); //Currently selected/clicked contract box

    //Called when logout button is pushed; logs out user and returns to logout page
    function handleLogOut(event){
    }

    //dmumy
    function dummyData() {
        return {
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
    }

    function handleContractClick(event){
        console.log("Hello world!")
        console.log(event.target.id);
    }

    return ( <Container className="App">
    <Box>
        <AppBar position="static">
            <Toolbar>
                <Typography sx={{ fontFamily: 'arial', mr: 2, flexGrow: 1 }}>
                    CryptoGov
                </Typography>
                <Button color = "inherit" onClick = {handleLogOut} sx={{ fontFamily: 'arial'}}>
                    Log out
                </Button>
            </Toolbar>
        </AppBar>
    </Box>
    <Box sx={{ display: 'grid', gridTemplateColumns: 'auto auto'}}>
        <ContractList

            sx={{bgcolor: 'white', width: '100%', height: '100%'}}
            clickHandler = {handleContractClick}
            />

            <ContractDetails

            />
        </Box>
    </Container>
    );
}
