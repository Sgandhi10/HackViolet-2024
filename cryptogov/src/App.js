//Imports
import './App.css';
import ContractList from './ContractList.js'
import ContractDetails from './ContractDetails.js'

import { useState, useEffect } from "react";
import {Box, Container} from "@mui/system";
import {Toolbar, Button, Typography, AppBar} from "@mui/material";

function App() {

    const [selectedContract, setSelectedContract] = useState(null); //Currently selected/clicked contract box

    //Called when logout button is pushed; logs out user and returns to logout page
    function handleLogOut(event){
    }

    function dummyData() {
        
    }

  return (
      <Container className="App">
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
              />

              <ContractDetails

              />
          </Box>
      </Container>
  );
}

export default App;
