import { useLocation, Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import LoadingToRedirect from "./LoadingToRedirect";
import {ACCESS_TOKEN_TYPES, selectAuth} from "../redux/slice/authSlice";

const RequireAuth = () => {
    const { token, token_type } = useSelector(selectAuth);
    const location = useLocation();

    return (
        token && token_type === ACCESS_TOKEN_TYPES.user ?
            <Outlet /> : <LoadingToRedirect  redirectString={"/product"}/>
    )
}
export default RequireAuth;