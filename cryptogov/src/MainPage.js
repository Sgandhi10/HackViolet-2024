import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContractList from './ContractList.js';
import ContractDetails from './ContractDetails.js';
import {Box, Container} from "@mui/system";
import {Toolbar, Button, Typography, AppBar} from "@mui/material";

//dmumy
const dummyData = {
    "contracts": [{
        "name": "Department of Defense",
        "description": "OUSD (R&E) CRITICAL TECHNOLOGY AREA(S): Biotechnology; Advanced Materials OBJECTIVE: The objective of this topic is to develop applied research toward an innovative capability to improve water surveillance at point-of-need.",
        "status": "working",
        "cid": "SOCOM244-003",
        "hoursWorked": 23,
        "cost": 30004
    },
    {
        "name": "Air Force",
        "description": "The technology within this topic is restricted under the International Traffic in Arms Regulation (ITAR), 22 CFR Parts 120-130, which controls the export and import of defense-related material and services, including export of sensitive technical data, or the Export Administration Regulation (EAR), 15 CFR Parts 730-774, which controls dual use items. Offerors must disclose any proposed use of foreign nationals (FNs), their country(ies) of origin, the type of visa or work permit possessed, and the statement of work (SOW) tasks intended for accomplishment by the FN(s) in accordance with the Announcement. Offerors are advised foreign nationals proposed to perform on this topic may be restricted due to the technical data under US Export Control Laws.",
        "status": "working",
        "cid": "AF24A-T001",
        "hoursWorked": 1,
        "cost": 30000
    },
    {
        "name": "Health and Human Services",
        "description": "Since its inception in 1982, the NIH SBIR program has provided the small business community with seed funding to support the development of a broad array of commercial products to detect, diagnose, treat, and prevent disease.? It provides an important funding mechanism for bringing new interventions to patients and clinicians.",
        "status": "inactive",
        "cid": "RFA-HL-23-008",
        "hoursWorked": 9,
        "cost": 19000
    }]
};

export default function MainPage() {

    const [selectedContract, setSelectedContract] = useState(null); //Currently selected/clicked contract box
    const [contractData, setContractData] = useState(dummyData); //NOTE: DUMMYDATA IS PLACEHOLDER!!
    const [addingContract, setAddingContract] = useState(false);

    const navigate = useNavigate();

    //Called when logout button is pushed; logs out user and returns to logout page
    function handleLogOut(){
        navigate("/")
    }

    //Update "isAdding" state to true, hiding contract details and making add panel visible
    function handleAddClick() {
        setAddingContract(!addingContract)
    }

    //Make contract details visible and hide add panel
    function handleFinishAdd() {
        // Todo: read the text fields and create a new contract
        setAddingContract(false)
    }

    function getData() {
        return dummyData;
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
                <Button onClick = {handleLogOut} sx={{ fontFamily: 'arial', backgroundColor: "white", color: "black", border: 2, borderWidth: 2, '&:hover' : {backgroundColor: "#c9c9c9"}}}>
                    Log out
                </Button>
            </Toolbar>
        </AppBar>
    </Box>
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', width:"100%", height:"100%"}}>
        <ContractList
            sx={{bgcolor: 'white', width: '100%', height: '100%'}}
            clickHandler = {handleContractClick}
            addClickHandler = {handleAddClick}
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
