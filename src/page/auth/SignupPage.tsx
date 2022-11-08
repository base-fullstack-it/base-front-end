import SignupFormik, {SignupFormValuesInterface} from "../../component/auth/SignupFormik";

export default () =>{

    const handleRegister = async (values:SignupFormValuesInterface) => {

    };

    return <>
        <SignupFormik handleRegister={handleRegister} />
    </>
}