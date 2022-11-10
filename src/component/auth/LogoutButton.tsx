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

return <Button variant={"contained"} color={"primary"}
               style={{backgroundColor: '#2b79e3',
                   color: 'white',
                   marginLeft:4
                   // fontSize:"1.2rem"
               }}
               onClick={()=>handleLogout()}>logout</Button>
}