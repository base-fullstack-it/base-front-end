import {AppBar, Grid, Toolbar} from "@mui/material";
import NavbarLogo from "./logo/NavbarLogo";
export default () => {
    return (
        <AppBar
            position={"sticky"}
        >
            <Toolbar>
                <Grid sx={{placeItems: "center"}} container>
                    <NavbarLogo/>

                </Grid>
            </Toolbar>
        </AppBar>

    );
}