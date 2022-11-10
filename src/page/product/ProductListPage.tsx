import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import {useProductsQuery} from "../../redux/api_slice/productApiSlice";
import ProductListMUITable from "../../component/product/ProductListMUITable";

export default () => {
    const navigate = useNavigate();
    const {
        data,isLoading
    } = useProductsQuery();

    return <>

        <ProductListMUITable products={data}/>

    </>
}