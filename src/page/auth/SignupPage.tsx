import SignupFormik, {SignupFormValuesInterface} from "../../component/auth/SignupFormik";
import {useGetAppAccessTokenQuery, useRegisterUserMutation} from "../../redux/api_slice/authApiSlice";
import {useAppDispatch} from "../../redux/hooks";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {ACCESS_TOKEN_TYPES, setUser} from "../../redux/slice/authSlice";
import {User} from "../../model/User.model";
import {string} from "yup";

export default () =>{
    const {data,isLoading} = useGetAppAccessTokenQuery();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [
        registerUser,
        {
            data: registerData,
            isSuccess: isRegisterSuccess,
            isError: isRegisterError,
            error: registerError,
        },
    ] = useRegisterUserMutation();
    useEffect(()=>{
        // if(data?.access_token)console.log(data, 'data from get AppAccessToken from auth')
        if(data?.access_token) dispatch(setUser({
            name:"app",
            token:data.access_token,
            token_type: ACCESS_TOKEN_TYPES.app}
        ))
    },[data]);

    const handleRegister =  (values:SignupFormValuesInterface) => {
        console.log(values,'VALORES')


        registerUser(values);
        navigate("/login");

    };

    return <>
        <SignupFormik handleRegister={handleRegister} />
    </>
}