import {AppBar, Grid, Toolbar, useMediaQuery} from "@mui/material";
import NavbarLogo from "./logo/NavbarLogo";
import {useState} from "react";
import NavbarGridTabs from "./NavbarGridTabs";
import LogoutButton from "../auth/LogoutButton";
import {ACCESS_TOKEN_TYPES, selectAuth} from "../../redux/slice/authSlice";
import NavbarPointCloudButton from "./NavbarPointCloudButton";
import {useAppSelector} from "../../redux/hooks";
import ProductNavigateCreateUpdateButton from "../product/ProductNavigateCreateUpdateButton";
import ProductNavigateListButton from "../product/ProductNavigateListButton";
import { useTheme } from '@mui/material/styles';

export default () => {
    const theme = useTheme();
    const mediaQuery = useMediaQuery(theme.breakpoints.down('md'));
    const {token, token_type} = useAppSelector(selectAuth);

    return (
        <AppBar
            position={"sticky"}
        >
            <Toolbar>
                <Grid sx={{placeItems: "center"}} container>
                    <NavbarLogo/>
                    <Grid item xs={mediaQuery ? 1: 4}/>
                    {token && token_type === ACCESS_TOKEN_TYPES.user && <>
                        <Grid item xs={mediaQuery ? 2: 1}>
                            <ProductNavigateListButton/>
                        </Grid>
                        <Grid item xs={mediaQuery ? 2:1}>
                            <ProductNavigateCreateUpdateButton/>
                        </Grid>
                        <Grid item xs={mediaQuery ? 2:1}>
                            <NavbarPointCloudButton/>
                        </Grid>
                        <Grid item xs={mediaQuery ? 2:1}>
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