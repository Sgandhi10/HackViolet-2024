//The component containing boxes mapped to each contract in the dataset.

import { useState, useEffect } from "react";
import {Box, Container} from "@mui/system";
import {Toolbar, Button, Typography, AppBar} from "@mui/material";
import App from "./App";
import ContractListItem from "./ContractListItem.js"

function ContractList(props) {
    return (
        <Container className = "ContractList">
            <Box sx={{marginTop: 2}}>
                <Button sx={{color: "black", backgroundColor: "#ffffff", border: 2, width:"30%", '&:hover' : {backgroundColor: "#c9c9c9"}}} size = "large" onClick = {props.addClickHandler}>
                    Add
                </Button>
                {props.dummyData.contracts.map((contract, i) => (
                    <Box key = {i} sx={{marginTop: 2}}>
                <ContractListItem indexNum = {i} clickHandler = {props.clickHandler} contract = {contract} selectedContract = {props.selectedContract}>
                </ContractListItem>
                    </Box>
                ))}
            </Box>
        </Container>
    )
}

export default ContractList;