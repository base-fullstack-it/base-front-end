import { useLocation, Navigate, Outlet } from "react-router-dom"
import LoadingToRedirect from "./LoadingToRedirect";
import {ACCESS_TOKEN_TYPES, selectAuth} from "../redux/slice/authSlice";
import {useAppSelector} from "../redux/hooks";

const RequireAuth = () => {
    const { token, token_type } = useAppSelector(selectAuth);
    const location = useLocation();

    return (
        token && token_type === ACCESS_TOKEN_TYPES.user ?
            <Outlet /> : <LoadingToRedirect  redirectString={"/product"}/>
    )
}
export default RequireAuth;