import ProductFormik, {ProductFormValuesInterface} from "../../component/product/ProductFormik";
import {useAddProductMutation} from "../../redux/api_slice/productApiSlice";
import {useLocation} from "react-router-dom";
import SelectedProductDetailCard from "../../component/product/detail/SelectedProductDetailCard";
import {useAppSelector} from "../../redux/hooks";
import { selectProduct} from "../../redux/slice/productSlice";
import SelectedProductDetailValueAggregate from "../../component/product/detail/SelectedProductDetailValueAggregate";
import {Container, Grid, Typography} from "@mui/material";
import React from "react";

export default () => {
    // const {state} = useLocation();
    // const {selectedProduct} = state;
    const selectedProduct = useAppSelector(selectProduct);

    const [
        mutation,
        {
            data,
            isSuccess,
            isError,
            error,
        },
    ] = useAddProductMutation();

    const updateAddProduct = async (values:ProductFormValuesInterface) => {
        console.log(values,'VALUESS');
        const formData = new FormData();
        if(values.file){
            formData.append('file', values.file);
            delete values.file;
        }
        values.id = selectedProduct!.id;
        // if(values.country) delete values.country;
        const jsonBody = JSON.stringify(values);
        formData.append('meta-data', jsonBody);
        await mutation(formData);
    };
    return <Container >
        <Grid p={1} item >
            <Typography align={"center"} style={{fontSize: "2rem" }}
            >
                Update Product
            </Typography>
            <Typography align={"center"}
            >
                If left blank the value will remain the same as the values shown below the form
            </Typography>
        </Grid>
        <ProductFormik
            alterProduct={updateAddProduct}
            isUpdateForm={true}
        />
        {selectedProduct && <SelectedProductDetailValueAggregate selectedProduct={selectedProduct}/>}
    </Container>
}