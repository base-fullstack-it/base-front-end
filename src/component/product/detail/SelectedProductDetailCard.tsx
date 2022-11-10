import {Card, CardContent, CardHeader, CardMedia, Grid, Typography} from "@mui/material";
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
                <Grid container>
                    <Grid item style={{marginRight:6}}>
                        <DeleteButton id={selectedProduct.id}/>
                    </Grid>
                    <Grid item>
                        <EditButton selectedProduct={selectedProduct}/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>)
}