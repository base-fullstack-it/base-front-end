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
        {
            selectedProduct.imageLocation && <CardMedia>
                <img alt={`${selectedProduct!.name} : ${selectedProduct!.name}`}
                     style={{ width: '300px', height: '300px' }}
                     src={`${API_HOST}${selectedProduct!.imageLocation}`}/>
            </CardMedia>
        }
    </>

}