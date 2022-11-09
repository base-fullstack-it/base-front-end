import LoginFormik, {LoginFormValuesInterface} from "../../component/auth/LoginFormik";
import {useNavigate} from "react-router-dom";
import {Container, Grid, Link} from "@mui/material";
import {useAppDispatch} from "../../redux/hooks";
import {useLoginUserMutation} from "../../redux/api_slice/authApiSlice";
import {ACCESS_TOKEN_TYPES, setUser} from "../../redux/slice/authSlice";

export default () =>{
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [
        loginUser,
        {
            data: loginData,
            isSuccess: isLoginSuccess,
            isError: isLoginError,
            error: loginError,
        },
    ] = useLoginUserMutation();

    const handleLogin = async (values:LoginFormValuesInterface) => {
        console.log(values,"SUBMITTER");
        const data = await loginUser({...values}).unwrap();
        dispatch(setUser(
            {
                name:"user",
                token:data.access_token,
                token_type: ACCESS_TOKEN_TYPES.user}
        ))
    }
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