import {Card, CardHeader, CardMedia, Typography} from "@mui/material";
import * as React from "react";
import {API_HOST} from "../ProductListMUITable";
import {Product} from "../../../model/Product.model";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import SelectedProductDetailValueAggregate from "./SelectedProductDetailValueAggregate";

export default ({selectedProduct}: { selectedProduct: Product }) => {
    return <Card>
        <SelectedProductDetailValueAggregate selectedProduct={selectedProduct} />
        <DeleteButton id={selectedProduct.id}/>
        <EditButton selectedProduct={selectedProduct} />
    </Card>
}