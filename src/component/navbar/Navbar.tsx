import {AppBar, Grid, Toolbar} from "@mui/material";
import NavbarLogo from "./logo/NavbarLogo";
import {useState} from "react";
import NavbarGridTabs from "./NavbarGridTabs";
import LogoutButton from "../auth/LogoutButton";
import {useSelector} from "react-redux";
import {ACCESS_TOKEN_TYPES, selectAuth} from "../../redux/slice/authSlice";
import NavbarPointCloudButton from "./NavbarPointCloudButton";

export default () => {
    const {token, token_type} = useSelector(selectAuth);
    return (
        <AppBar
            position={"sticky"}
        >
            <Toolbar>
                <Grid sx={{placeItems: "center"}} container>
                    <NavbarLogo/>
                    <Grid item xs={6}/>
                    {token && token_type === ACCESS_TOKEN_TYPES.user && <>
                        <Grid item xs={1}>
                            <NavbarPointCloudButton/>
                        </Grid>
                        <Grid item xs={1}>
                            <LogoutButton/>
                        </Grid>
                    </>
                    }

                </Grid>

                <NavbarGridTabs/>
            </Toolbar>
        </AppBar>

    );
}