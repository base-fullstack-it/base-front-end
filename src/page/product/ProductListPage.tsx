import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

export default () => {
    const navigate = useNavigate();
    return <>Product List Page
        <Button variant={"outlined"}onClick={()=>navigate("create_update")}>
            Add Product
        </Button>
    </>
}