import React from 'react';

import {Button, CssBaseline, ThemeProvider} from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import muiTheme from "./theme/muiTheme";
import Home from "./page/Home";
import Navbar from "./component/navbar/Navbar";

function App() {
  return (
      <ThemeProvider theme={muiTheme}>
          <CssBaseline>
              <BrowserRouter>
                  <Navbar/>
                  <Routes>
                      <Route path="/" element={<Home/>} />
                      <Route path="/cat" element={<Home/>} />
                  </Routes>
              </BrowserRouter>
          </CssBaseline>
        {/*<Button color={"primary"} variant={"outlined"}>HI</Button>*/}
      </ThemeProvider>
  );
}

export default App;
