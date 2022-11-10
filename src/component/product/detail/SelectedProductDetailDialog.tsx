import {Card, CardMedia} from "@mui/material";
import * as React from "react";
import {API_HOST} from "../ProductListMUITable";
import {Product} from "../../../model/Product.model";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

export default ({selectedProduct}: { selectedProduct: Product }) => {
    return <Card>
        <CardMedia>
            <img alt={`${selectedProduct!.name} : ${selectedProduct!.name}`}
                 src={`${API_HOST}${selectedProduct!.imageLocation}`}/>
        </CardMedia>
        <DeleteButton id={selectedProduct.id}/>
        <EditButton/>
    </Card>
}