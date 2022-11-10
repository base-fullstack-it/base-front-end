import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

export default () => {
    const navigate = useNavigate();
    return <Button
        variant={"contained"}
        color={"primary"}
        onClick={() => navigate("/product/create_update")}
    >EDIT</Button>
}