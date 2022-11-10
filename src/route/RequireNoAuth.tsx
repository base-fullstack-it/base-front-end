import { useLocation, Navigate, Outlet } from "react-router-dom"
import {ACCESS_TOKEN_TYPES, selectAuth} from "../redux/slice/authSlice";
import LoadingToRedirect from "./LoadingToRedirect";
import {useAppSelector} from "../redux/hooks";


export default () => {
    const { token, token_type } = useAppSelector(selectAuth);
    return (
        !token || token_type !== ACCESS_TOKEN_TYPES.user ?
            <Outlet /> : <LoadingToRedirect redirectString={"/login"} />
    )
}
