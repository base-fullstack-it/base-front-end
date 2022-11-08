import LoginFormik, {LoginFormValuesInterface} from "../../component/auth/LoginFormik";
import {useNavigate} from "react-router-dom";
import {Container, Grid, Link} from "@mui/material";

export default () =>{
    const navigate = useNavigate();
    const handleLogin = async (values:LoginFormValuesInterface) => {}
    return  <Grid container style={{
            alignItems:"center",
            justifyContent:"center"
        }}
                  spacing={2}
    >
        <LoginFormik loginUser={handleLogin} />
        <Grid item>
        <Link
            component="button"
            variant="body2"
            onClick={() => navigate("/signup")}
        >
            Don't have an account? Click here to sign up
        </Link>
        </Grid>
    </Grid>
}