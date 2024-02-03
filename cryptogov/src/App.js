//Imports
import './App.css';
import ContractList from './ContractList.js'
import ContractDetails from './ContractDetails.js'

import { useState, useEffect } from "react";
import {Box, Container} from "@mui/system";
import {Toolbar, Button, Typography, AppBar} from "@mui/material";

function App() {
  return (
      <Container className="App">
          <Box>
              <AppBar position="static">
                  <Toolbar>
                      <Typography sx={{ fontFamily: 'arial'}}>
                          CryptoGov
                      </Typography>

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
