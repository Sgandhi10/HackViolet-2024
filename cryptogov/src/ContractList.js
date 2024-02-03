//The component containing boxes mapped to each contract in the dataset.

import { useState, useEffect } from "react";
import {Box, Container} from "@mui/system";
import {Toolbar, Button, Typography, AppBar} from "@mui/material";
import App from "./App";
import ContractListItem from "./ContractListItem.js"

function ContractList() {
    return (
        <Container className = "ContractList">
            <Box>
                <ContractListItem indexNum = {1}>
                </ContractListItem>
            </Box>
        </Container>
    )
}

export default ContractList;