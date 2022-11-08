import SignupFormik, {SignupFormValuesInterface} from "../../component/auth/SignupFormik";
import {useRegisterUserMutation} from "../../redux/api_slice/authApiSlice";
import {useAppDispatch} from "../../redux/hooks";
import {useNavigate} from "react-router-dom";

export default () =>{
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

    const handleRegister = async (values:SignupFormValuesInterface) => {
        console.log(values,'VALORES')

        await registerUser(values);

    };

    return <>
        <SignupFormik handleRegister={handleRegister} />
    </>
}