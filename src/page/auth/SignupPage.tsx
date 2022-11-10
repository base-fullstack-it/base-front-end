import SignupFormik, {SignupFormValuesInterface} from "../../component/auth/SignupFormik";
import {useGetAppAccessTokenQuery, useRegisterUserMutation} from "../../redux/api_slice/authApiSlice";
import {useAppDispatch} from "../../redux/hooks";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {ACCESS_TOKEN_TYPES, setUser} from "../../redux/slice/authSlice";

import {toast} from "react-toastify";

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
        if(data?.access_token) dispatch(setUser({
            name:"app",
            token:data.access_token,
            token_type: ACCESS_TOKEN_TYPES.app}
        ))
    },[data]);

    const handleRegister =  (values:SignupFormValuesInterface) => {
        registerUser(values);
    };
    useEffect(() => {
        if (isRegisterError) toast.error((registerError as any).data.message);
    }, [isRegisterError]);
    useEffect(() => {
        if (!isRegisterSuccess) return;
         toast.success("Welcome! Now Log in");
         navigate("/login");
    }, [isRegisterSuccess]);

    return <>
        <SignupFormik handleRegister={handleRegister} />
    </>
}