import {Card, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";
import * as React from "react";
import {API_HOST} from "../ProductListMUITable";
import {Product} from "../../../model/Product.model";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import SelectedProductDetailValueAggregate from "./SelectedProductDetailValueAggregate";

export default ({selectedProduct}: { selectedProduct: Product }) => {
    return (
        <Card sx={{minWidth: 275}}>
            <CardContent>
                <SelectedProductDetailValueAggregate selectedProduct={selectedProduct}/>
                <DeleteButton id={selectedProduct.id}/>
                <EditButton selectedProduct={selectedProduct}/>
            </CardContent>
        </Card>)
}