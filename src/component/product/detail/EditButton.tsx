import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {Product} from "../../../model/Product.model";
import {useAppDispatch} from "../../../redux/hooks";
import {setProduct} from "../../../redux/slice/productSlice";

export default ({selectedProduct}:{selectedProduct:Product}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleEdit = () => {
        dispatch(setProduct(selectedProduct));
        navigate("/product/update");
    }
    return <Button
        variant={"contained"}
        color={"primary"}
        onClick={handleEdit}
    >EDIT</Button>
}