import {AppBar, Grid, Toolbar} from "@mui/material";
import NavbarLogo from "./logo/NavbarLogo";
import {useState} from "react";
import NavbarGridTabs from "./NavbarGridTabs";
export default () => {
    return (
        <AppBar
            position={"sticky"}
        >
            <Toolbar>
                <Grid sx={{placeItems: "center"}} container>
                    <NavbarLogo/>
                </Grid>
                <NavbarGridTabs/>
            </Toolbar>
        </AppBar>

    );
}