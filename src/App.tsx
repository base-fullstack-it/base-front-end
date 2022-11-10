import React, {useEffect} from 'react';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import muiTheme from "./theme/muiTheme";
import Navbar from "./component/navbar/Navbar";
import ProductRoutes from "./route/ProductRoutes";
import LoginPage from './page/auth/LoginPage';
import SignupPage from "./page/auth/SignupPage";
import RequireNoAuth from "./route/RequireNoAuth";
import RequireAuth from "./route/RequireAuth";
import {useAppDispatch, useAppSelector} from "./redux/hooks";
import {ACCESS_TOKEN_TYPES, selectAuth, setUser} from "./redux/slice/authSlice";
import PointCloudPage from './page/point_cloud/PointCloudPage';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import NavbarTabValuesContextWrapper from "./context/NavbarTabValuesContextWrapper";

function App() {
    const dispatch = useAppDispatch();

    const {token, token_type} = useAppSelector(selectAuth);
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    useEffect(() => {
        dispatch(setUser(user));
    }, []);
    return (
        <ThemeProvider theme={muiTheme}>
            <CssBaseline>
                <NavbarTabValuesContextWrapper>
                    <BrowserRouter>
                        <Navbar/>
                        <Routes>
                            {
                                token && token_type === ACCESS_TOKEN_TYPES.user ?
                                    <Route path="/" element={<Navigate to="/product" replace/>}/>
                                    :
                                    <Route path="/" element={<Navigate to="/login" replace/>}/>
                            }
                            <Route path="/" element={<Navigate to="/login" replace/>}/>
                            {/* public routes */}
                            <Route element={<RequireNoAuth/>}>
                                <Route path="/login" element={<LoginPage/>}/>
                                <Route path="/signup" element={<SignupPage/>}/>
                            </Route>
                            {/* protected routes */}
                            <Route element={<RequireAuth/>}>
                                <Route path="/product/*" element={<ProductRoutes/>}/>
                                <Route path="/point_cloud" element={<PointCloudPage/>}/>
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </NavbarTabValuesContextWrapper>
            </CssBaseline>
            <ToastContainer/>
        </ThemeProvider>
    );
}

export default App;
