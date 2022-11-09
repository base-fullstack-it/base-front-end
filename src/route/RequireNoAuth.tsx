import { useLocation, Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import {ACCESS_TOKEN_TYPES, selectAuth} from "../redux/slice/authSlice";
import LoadingToRedirect from "./LoadingToRedirect";


export default () => {
    const { token, token_type } = useSelector(selectAuth);
    return (
        !token || token_type !== ACCESS_TOKEN_TYPES.user ?
            <Outlet /> : <LoadingToRedirect redirectString={"/login"} />
    )
}
