import ProductFormik, {ProductFormValuesInterface} from "../../component/product/ProductFormik";
import {useAddProductMutation} from "../../redux/api_slice/productApiSlice";
import {useAppSelector} from "../../redux/hooks";
import { selectProduct} from "../../redux/slice/productSlice";
import SelectedProductDetailValueAggregate from "../../component/product/detail/SelectedProductDetailValueAggregate";
import {Container, Grid, Typography} from "@mui/material";
import React, {useContext, useEffect} from "react";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {NavbarTabValuesI} from "../../hook/useNavbarTabValues";
import {NavbarTabValuesContext} from "../../context/NavbarTabValuesContextWrapper";

export default () => {
    const navbarTabValues = useContext<NavbarTabValuesI>(NavbarTabValuesContext);
    const selectedProduct = useAppSelector(selectProduct);
    const navigate = useNavigate();
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
        if(values.anyFile){
            formData.append('anyFile', values.anyFile);
            delete values.anyFile;
        }

        values.id = selectedProduct!.id;
        // if(values.country) delete values.country;
        const jsonBody = JSON.stringify(values);
        formData.append('meta-data', jsonBody);
        await mutation(formData);
    };
    useEffect(() => {
        if (isError) toast.error((error as any).data.message);
    }, [isError]);
    useEffect(() => {
        if (!isSuccess) return;
        toast.success("Product successfully updated");
        navigate("/product");
        navbarTabValues.handleValues(0);

    }, [isSuccess]);
    return <Container style={{marginTop:25}}>
        <Grid container style={{flexDirection:"row"}} >
        <Grid item>
            {selectedProduct && <SelectedProductDetailValueAggregate selectedProduct={selectedProduct}/>}
        </Grid>
            <Grid item xs={1}/>
        <Grid item >
            <Typography align={"center"} style={{fontSize: "2rem" }}
            >
                Update Product
            </Typography>
            <Typography align={"center"}
            >
                If left blank the value will remain the same
            </Typography>
        <ProductFormik
            alterProduct={updateAddProduct}
            isUpdateForm={true}
        />
        </Grid>
    </Grid>
    </Container>
}