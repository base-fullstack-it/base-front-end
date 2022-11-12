import ProductFormik, {ProductFormValuesInterface} from "../../component/product/ProductFormik";
import {useAddProductMutation} from "../../redux/api_slice/productApiSlice";
import {Grid, Typography} from "@mui/material";
import React, {useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {NavbarTabValuesI} from "../../hook/useNavbarTabValues";
import {NavbarTabValuesContext} from "../../context/NavbarTabValuesContextWrapper";

export default () => {
    const navbarTabValues = useContext<NavbarTabValuesI>(NavbarTabValuesContext);
    const [
        mutation,
        {
            data,
            isSuccess,
            isError,
            error,
        },
    ] = useAddProductMutation();
    const navigate = useNavigate();

    const updateAddProduct = async (values: ProductFormValuesInterface) => {
        const formData = new FormData();
        if (values.file) {
            formData.append('file', values.file);
            delete values.file;
        }
        const jsonBody = JSON.stringify(values);
        formData.append('meta-data', jsonBody);
        await mutation(formData);
    };

    useEffect(() => {
        if (!isError) return;
        toast.error("Something went wrong! Please contact customer support");
        console.log(error)
    }, [isError]);
    useEffect(() => {
        if (!isSuccess) return;
        toast.success("Product successfully created");
        navbarTabValues.handleValues(0);
        navigate("/product")
    }, [isSuccess]);

    return <>
        <Grid p={1} item>
            <Typography align={"center"} style={{fontSize: "2rem"}}>
                Add Product
            </Typography>
        </Grid> <Grid container
                      display={"flex"}
                      justifyContent="center"
                      spacing={2}
    >
        <ProductFormik
            alterProduct={updateAddProduct}
            isUpdateForm={false}
        />
    </Grid>
    </>
}