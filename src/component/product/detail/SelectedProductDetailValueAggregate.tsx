import {Product} from "../../../model/Product.model";
import {CardMedia, Link, Typography} from "@mui/material";
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
    const {
        data:imageFilePresignedUrl
    } = usePresignedProductUrlQuery(selectedProduct.imageLocation);

    const {
        data:anyFilePresignedUrl,isLoading, isError, error
    } = usePresignedProductUrlQuery(selectedProduct.fileLocation);

    useEffect(() => {
        console.log(anyFilePresignedUrl,"DATAA")
        if(isLoading) return;
        console.log(anyFilePresignedUrl,'THIS IS DATA WITHIN');

        }, [isLoading])
    useEffect(() => {
        if(!isError) return;
        console.log(error);
    },[isError])
    useEffect(() =>{
        console.log(selectedProduct,"PRODUCTOLOL");
    },[])

    return <>
        <Typography fontSize={"2rem"}><strong>Name: </strong>{selectedProduct.name}</Typography>
        <Typography><strong>Info: </strong>{selectedProduct.info}</Typography>
        <Typography><strong>id: </strong>{selectedProduct.id}</Typography>
        <Typography><strong>date: </strong>{selectedProduct.date}</Typography>
        <Typography><strong>Country: </strong>{selectedProduct.country}</Typography>
        {
            selectedProduct.imageLocation && imageFilePresignedUrl && <CardMedia>
                <img alt={`${selectedProduct!.name} : ${selectedProduct!.name}`}
                     style={{ width: '300px', height: '300px' }}
                     src={imageFilePresignedUrl}/>
            </CardMedia>
        }
        {
            selectedProduct.fileLocation && anyFilePresignedUrl && <Link  style={{marginTop:8,marginBottom:8}} href={anyFilePresignedUrl}>{selectedProduct.fileLocation}</Link>
        }

    </>

}