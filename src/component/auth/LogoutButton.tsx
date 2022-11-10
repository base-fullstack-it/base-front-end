import {Button} from "@mui/material";
import {useAppDispatch} from "../../redux/hooks";
import {logout} from "../../redux/slice/authSlice";
import {useNavigate} from "react-router-dom";

export default () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    }

return <Button variant={"contained"} color={"primary"} onClick={()=>handleLogout()}>logout</Button>
}