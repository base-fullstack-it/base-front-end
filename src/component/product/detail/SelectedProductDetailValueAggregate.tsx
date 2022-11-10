import {Product} from "../../../model/Product.model";
import {CardMedia, Typography} from "@mui/material";
import {API_HOST} from "../ProductListMUITable";
import * as React from "react";

export default ({selectedProduct}: { selectedProduct: Product }) =>{

    return <>
        <Typography fontSize={"2rem"}>{selectedProduct.name}</Typography>
        <Typography>{selectedProduct.info}</Typography>
        <Typography>{selectedProduct.id}</Typography>
        <Typography>{selectedProduct.date}</Typography>
        <CardMedia>
            <img alt={`${selectedProduct!.name} : ${selectedProduct!.name}`}
                 src={`${API_HOST}${selectedProduct!.imageLocation}`}/>
        </CardMedia>
    </>

}