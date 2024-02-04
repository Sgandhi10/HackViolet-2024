//The component containing details of the currently selected datapoint (shows "select a contract for more details" if none are selected)

import { useState, useEffect } from "react";
import {Box, Container} from "@mui/system";
import {Toolbar, Button, Typography, AppBar} from "@mui/material";
import App from "./App";
import ContractListItem from "./ContractListItem";

function ContractDetails(props) {
    
    function createDetails(){
        var ourString = ""

        if(props.data == null) {
            return "Select a contract for more details";
        }

        for(const[key, value] of Object.entries(props.data)){
            ourString = ourString + key + ": " + value + "\n\n";
        }

        console.log(ourString);
        return ourString
    }

    return (
        <Container className = "ContractList">
            <Box sx = {{whiteSpace: "pre-line", marginTop: 2, border: 2, borderRadius: 2, padding: 2}}>
                <Typography position = "static" multiline="true" sx={{textAlign: "left", flexGrow : 1}}>
                    {createDetails()}
                </Typography>

            </Box>
        </Container>
    )
}

export default ContractDetails;