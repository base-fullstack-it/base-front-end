import LoginFormik, {LoginFormValuesInterface} from "../../component/auth/LoginFormik";
import {useNavigate} from "react-router-dom";
import { Grid, Link} from "@mui/material";
import {useAppDispatch} from "../../redux/hooks";
import {useLoginUserMutation} from "../../redux/api_slice/authApiSlice";
import {ACCESS_TOKEN_TYPES, setUser} from "../../redux/slice/authSlice";
import {toast} from "react-toastify";
import {useContext, useEffect} from "react";
import {NavbarTabValuesI} from "../../hook/useNavbarTabValues";
import {NavbarTabValuesContext} from "../../context/NavbarTabValuesContextWrapper";
export default () =>{
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const navbarTabValues = useContext<NavbarTabValuesI>(NavbarTabValuesContext);
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
        await dispatch(setUser(
            {
                name:"user",
                token:data.access_token,
                token_type: ACCESS_TOKEN_TYPES.user}
        ))

    }
    useEffect(() => {

        if(isLoginError) {
            console.log(loginError,"REACHED THE ERROR")
            toast.error("You did not successfully log in");
            // toast.error((loginError as any).data.error_description);
        }
    }, [isLoginError]);

    useEffect(() => {
        if(!isLoginSuccess) return;
        toast.success("You are logged in");
        navbarTabValues.handleValues(1);
        navigate("/product/add");
    },[isLoginSuccess])

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