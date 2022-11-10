import {Outlet, useNavigate} from "react-router-dom"
import {ACCESS_TOKEN_TYPES, selectAuth} from "../redux/slice/authSlice";
import {useAppSelector} from "../redux/hooks";
import {useEffect} from "react";


export default () => {
    const { token, token_type } = useAppSelector(selectAuth);
    const navigate = useNavigate();
    useEffect(()=>{
        if(!token || token_type !== ACCESS_TOKEN_TYPES.user) navigate("/login");
    },[])
    return (
            <Outlet />
    )
}
