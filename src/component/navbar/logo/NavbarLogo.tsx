import {Grid} from "@mui/material";
import NavbarTypographyLogo from "./NavbarTypographyLogo";
import {useNavigate} from "react-router-dom";

export default () => {
    const navigate = useNavigate();
    // onClick={() => navigate("/")}
    return (
        <Grid item xs={2} onClick={() => navigate("/")} style={{cursor: "pointer"}}>
            <NavbarTypographyLogo/>
        </Grid>
    )
}