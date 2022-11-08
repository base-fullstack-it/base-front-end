import LoginFormik, {LoginFormValuesInterface} from "../../component/auth/LoginFormik";

export default () =>{
    const handleLogin = async (values:LoginFormValuesInterface) => {}
    return <>
        <LoginFormik loginUser={handleLogin} />
    </>
}