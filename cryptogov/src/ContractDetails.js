//The component containing details of the currently selected datapoint (shows "select a contract for more details" if none are selected)

import { useState, useEffect } from "react";
import {Box, Container} from "@mui/system";
import {Toolbar, Button, Typography, AppBar} from "@mui/material";
import App from "./App";

function ContractDetails(props) {
    
    function createDetails(){
        var ourString = ""

        for(const[key, value] of Object.entries(props.data)){
            ourString = ourString + key + ": " + value + "\n";
        }

        return ourString
    }

    return (
        <Container className = "ContractList">
            <Box>
                <Typography>
                    {createDetails()}
                </Typography>

            </Box>
        </Container>
    )
}

export default ContractDetails;