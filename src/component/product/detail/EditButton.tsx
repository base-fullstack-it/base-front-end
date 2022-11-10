import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {Product} from "../../../model/Product.model";
import {useAppDispatch} from "../../../redux/hooks";
import {setProduct} from "../../../redux/slice/productSlice";
import {useContext} from "react";
import {NavbarTabValuesI} from "../../../hook/useNavbarTabValues";
import {NavbarTabValuesContext} from "../../../context/NavbarTabValuesContextWrapper";

export default ({selectedProduct}:{selectedProduct:Product}) => {
    const navbarTabValues = useContext<NavbarTabValuesI>(NavbarTabValuesContext);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleEdit = () => {
        dispatch(setProduct(selectedProduct));
        navbarTabValues.handleValues(-1);
        navigate("/product/update");
    }
    return <Button
        variant={"contained"}
        color={"primary"}
        onClick={handleEdit}
    >EDIT</Button>
}