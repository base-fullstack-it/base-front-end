import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import {useAppSelector} from "../../redux/hooks";
import {selectProducts} from "../../redux/slice/productSlice";
import {useProductsQuery} from "../../redux/api_slice/productApiSlice";
import ProductListMUITable from "../../component/product/ProductListMUITable";
import {useEffect} from "react";

export default () => {
    const navigate = useNavigate();
    // const products = useAppSelector(selectProducts);
    const {
        data,isLoading
    } = useProductsQuery();

    return <>
        <Button variant={"outlined"}onClick={()=>navigate("create_update")}>
            Add Product
        </Button>
        <ProductListMUITable products={data}/>

    </>
}