import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import {useAppSelector} from "../../redux/hooks";
import {selectProducts} from "../../redux/slice/productSlice";

export default () => {
    const navigate = useNavigate();
    const products = useAppSelector(selectProducts);
    return <>Product List Page
        <Button variant={"outlined"}onClick={()=>navigate("create_update")}>
            Add Product
        </Button>
    </>
}