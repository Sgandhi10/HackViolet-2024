//The component containing boxes mapped to each contract in the dataset.

import { useState, useEffect } from "react";
import {Box, Container} from "@mui/system";
import {Toolbar, Button, Typography, AppBar} from "@mui/material";
import App from "./App";
import ContractListItem from "./ContractListItem.js"

function ContractList(props) {
    return (
        <Container className = "ContractList">
            <Box>
                <ContractListItem indexNum = {2} clickHandler = {props.clickHandler}>
                </ContractListItem>
            </Box>
        </Container>
    )
}

export default ContractList;