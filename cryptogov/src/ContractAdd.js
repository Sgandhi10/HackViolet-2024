import { useState, useEffect } from "react";
import {Box, Container} from "@mui/system";
import {Toolbar, Button, Typography, TextField, AppBar} from "@mui/material";
import App from "./App";

function ContractAdd(props) {

    return (
        <Container className = "ContractList">
            <Box sx = {{whiteSpace: "pre-line", marginTop: 2, border: 2, borderRadius: 2, padding: 2}}>
                <Typography position = "static" multiline="true" sx={{textAlign: "left", flexGrow : 1}}>
                    Add Contract
                </Typography>
                <TextField position = "static" lavel = "name" sx={{textAlign: "left", width: "50%"}}></TextField>

            </Box>
        </Container>
    )
}

export default ContractAdd;