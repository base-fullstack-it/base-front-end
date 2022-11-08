import React from 'react';

import {Button, CssBaseline, ThemeProvider} from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import muiTheme from "./theme/muiTheme";
import HomePage from "./page/HomePage";
import Navbar from "./component/navbar/Navbar";
import ProductRoutes from "./route/ProductRoutes";
import LoginPage from './page/auth/LoginPage';
import SignupPage from "./page/auth/SignupPage";

function App() {
  return (
      <ThemeProvider theme={muiTheme}>
          <CssBaseline>
              <BrowserRouter>
                  <Navbar/>
                  <Routes>
                      <Route path="/" element={<HomePage/>} />
                      <Route path="/product/*" element={<ProductRoutes/>}/>
                      <Route path="/login" element={<LoginPage/>}/>
                      <Route path="/signup" element={<SignupPage/>}/>
                  </Routes>
              </BrowserRouter>
          </CssBaseline>
      </ThemeProvider>
  );
}

export default App;
