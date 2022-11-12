import {Container, Typography} from "@mui/material";
import {useProductsQuery} from "../../redux/api_slice/productApiSlice";
import ProductListMUITable from "../../component/product/ProductListMUITable";
import {useEffect} from "react";
import {toast} from "react-toastify";

export default () => {
    const {
        data,isLoading, isError, error
    } = useProductsQuery();
    useEffect(() => {
        if (!isError) return;
        toast.error("Something went wrong! Please contact customer support");
        console.log(error)
    }, [isError]);
    return <Container style={{marginTop:20}}>

        <Typography style={{margin:10}}>
            Click on a row in order to see the image and to perform an action on the product
        </Typography>
        {!isLoading ?
            <ProductListMUITable products={data}/> : "Loading"
        }
        {!data && "If You are expecting data please refresh the page or contact customer support if issue persist"}

    </Container>
}