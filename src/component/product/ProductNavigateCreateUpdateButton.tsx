import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

export default () => {
    const navigate = useNavigate();
    return <Button variant={"contained"} color={"primary"}
                   style={{backgroundColor: '#2b79e3',
                       color: 'white',
                       // marginLeft:10
                       // fontSize:"1.2rem"
                   }}
                   onClick={()=>navigate("/product/add")}>Add Product</Button>
}