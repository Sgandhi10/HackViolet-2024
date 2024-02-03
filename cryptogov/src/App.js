//Imports
import './App.css';
import ContractList from './ContractList.js'
import ContractDetails from './ContractDetails.js'

import { useState, useEffect } from "react";
import {Box, Container} from "@mui/system";
import {Toolbar, Button, Typography, AppBar} from "@mui/material";

//cont selectedContract = useState()

function App() {

    //Called when logout button is pushed; logs out user and returns to logout page
    function handleLogOut(event){
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

          </Box>
      </Container>
  );
}

/*
              <ContractList

              />

              <ContractDetails

              />
*/
export default App;
