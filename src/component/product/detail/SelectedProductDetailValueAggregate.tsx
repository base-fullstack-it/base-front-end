import {Product} from "../../../model/Product.model";
import {CardMedia, Typography} from "@mui/material";
import {API_HOST} from "../ProductListMUITable";
import * as React from "react";
import {
    usePresignedFileProductUrlQuery,
    usePresignedProductUrlQuery,
    useProductsQuery
} from "../../../redux/api_slice/productApiSlice";
import {useLoginUserMutation} from "../../../redux/api_slice/authApiSlice";
import {useEffect} from "react";

export default ({selectedProduct}: { selectedProduct: Product }) =>{
    console.log(selectedProduct.imageLocation,"SELECTEDD PRODUCT BEFORE ENTRY")

    const {
        data,isLoading, isError, error
    } = usePresignedProductUrlQuery(selectedProduct.imageLocation);

    useEffect(() => {
        console.log(data,"DATAA")
        if(isLoading) return;
        console.log(data,'THIS IS DATA WITHIN');
        }, [isLoading])
    useEffect(() => {
        if(!isError) return;
        console.log(error);
    },[isError])

    return <>
        <Typography fontSize={"2rem"}><strong>Name: </strong>{selectedProduct.name}</Typography>
        <Typography><strong>Info: </strong>{selectedProduct.info}</Typography>
        <Typography><strong>id: </strong>{selectedProduct.id}</Typography>
        <Typography><strong>date: </strong>{selectedProduct.date}</Typography>
        {
            selectedProduct.imageLocation && data && <CardMedia>
                <img alt={`${selectedProduct!.name} : ${selectedProduct!.name}`}
                     style={{ width: '300px', height: '300px' }}
                     src={data}/>
            </CardMedia>
        }
    </>

}