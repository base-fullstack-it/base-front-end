import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

export default () => {
    const navigate = useNavigate();
    return <Button variant={"contained"} color={"primary"}
                   style={{backgroundColor: '#2b79e3',
                       color: 'white',
                       // fontSize:"1.2rem"
                   }}
                   onClick={()=>navigate("/point_cloud")}>Point Cloud</Button>
}