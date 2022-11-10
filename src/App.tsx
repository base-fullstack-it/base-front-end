import React, {useEffect} from 'react';

import {Button, CssBaseline, ThemeProvider} from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import muiTheme from "./theme/muiTheme";
import HomePage from "./page/HomePage";
import Navbar from "./component/navbar/Navbar";
import ProductRoutes from "./route/ProductRoutes";
import LoginPage from './page/auth/LoginPage';
import SignupPage from "./page/auth/SignupPage";
import RequireNoAuth from "./route/RequireNoAuth";
import RequireAuth from "./route/RequireAuth";
import {useAppDispatch} from "./redux/hooks";
import {setUser} from "./redux/slice/authSlice";

function App() {
    const dispatch = useAppDispatch();

    const user = JSON.parse(localStorage.getItem("user") || "{}");

    useEffect(() => {
        dispatch(setUser(user));
    }, []);
  return (
      <ThemeProvider theme={muiTheme}>
          <CssBaseline>
              <BrowserRouter>
                  <Navbar/>
                  <Routes>
                      {
                          user && user.token ?
                      <Route path="/" element={<Navigate to="/product" replace />} />
                              :
                              <Route path="/" element={<Navigate to="/login" replace />} />
                      }

                      <Route path="/" element={<Navigate to="/login" replace />} />
                      {/* public routes */}
                      <Route element={<RequireNoAuth />}>
                          <Route path="/login" element={<LoginPage/>}/>
                          <Route path="/signup" element={<SignupPage/>}/>
                      </Route>
                      {/* protected routes */}
                      <Route element={<RequireAuth />}>
                          <Route path="/product/*" element={<ProductRoutes/>}/>
                      </Route>
                      {/*<Route path="/" element={<HomePage/>} />*/}
                  </Routes>
              </BrowserRouter>
          </CssBaseline>
      </ThemeProvider>
  );
}

export default App;
