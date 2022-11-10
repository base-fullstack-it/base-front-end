import {AppBar, Grid, Toolbar} from "@mui/material";
import NavbarLogo from "./logo/NavbarLogo";
import {useState} from "react";
import NavbarGridTabs from "./NavbarGridTabs";
import NavbarTypographyLogo from "./logo/NavbarTypographyLogo";
import LogoutButton from "../auth/LogoutButton";
export default () => {
    return (
        <AppBar
            position={"sticky"}
        >
            <Toolbar>
                <Grid sx={{placeItems: "center"}} container>
                    <NavbarLogo/>
                    <Grid item xs={2}>
                        <LogoutButton/>
                    </Grid>

                </Grid>

                <NavbarGridTabs/>
            </Toolbar>
        </AppBar>

    );
}