import {Container, Grid, LinearProgress, Typography} from "@mui/material";
import React, {useState} from "react";
import {boolean, date, number, object, string} from "yup";
import {Form, Formik} from 'formik';
import ButtonWrapper from "../formik/Button";
import SnackbarWrapper from "../formik/Snackbar";
import TextFieldWrapper from "../formik/TextField";

//Product Id will be uniquely created in the database based on an auto increment instead of a form value?
//
//    readonly id: string;
//     readonly name: string;
//     readonly info: string;
//     readonly reference_number: string;
//     readonly country: string;
export interface ProductFormValuesInterface {
    name:string;
    info:string;
    reference_number:string;
    country:string;
}
const initialFormState = {
    name: "",
    info:"",
    reference_number:"",
    country:"",
}
interface ProductFormInterface{
    alterProduct(values:ProductFormValuesInterface): Promise<void>;
}

const validationSchema = object({
    name: string().required("Name required"),
    info: string().required("Info required"),
    reference_number: string().required("Reference Number required"),
    country: string().required("Country required"),
})
export default ({alterProduct}:ProductFormInterface) => {

    const [open, setOpen] = useState(false)

    // actions = { setSubmitting, resetForm, isSubmitting }
    const submitHandler = async (values:ProductFormValuesInterface, actions:any) => {
        // setTimeout(() => {
            // setSubmitting not needed with async
            actions.setSubmitting(false);
            // actions.resetForm(initialFormState);//TODO uncomment this it works well some sort of inbuilt function
            setOpen(true);
            console.log(values,'SUBMISS'); // test
        await alterProduct(values);
        // }, 2000)
    }
    const handleClose = (event:any, reason:any) => {
        if (reason === "clickaway") {
            return
        }
        setOpen(false)
    }

    return (
        // <div className={classes.root}>
            <Grid container
                  style={{marginTop:"5em"}}
                  display={"flex"}
                  // width={"100%"}
                  justifyContent="center"
                  spacing={2}

                  // rowSpacing={10}
                  // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                <Formik
                    initialValues={initialFormState}
                    validationSchema={validationSchema}
                    onSubmit={submitHandler}
                >
                    {
                        ({ isSubmitting }) => (
                            <Form>
                                    <Grid p={1} item >
                                        <Typography align={"center"} style={{fontSize: "2rem" }}
                                        >
                                            Add Or Update Product
                                        </Typography>
                                    </Grid>
                                    <Grid p={1} item>
                                        <TextFieldWrapper
                                            name='name'
                                            label="Name"
                                            type='text'
                                        />
                                    </Grid>
                                    <Grid p={1} item>
                                        <TextFieldWrapper
                                            name='info'
                                            label="Info"
                                            type='text'
                                        />
                                    </Grid>
                                    <Grid p={1} item>
                                        <TextFieldWrapper
                                            name='reference_number'
                                            label="Reference Number"
                                            type='text'
                                        />
                                    </Grid>
                                    <Grid p={1} item>
                                        <TextFieldWrapper
                                            name='country'
                                            label="Country"
                                            type='text'
                                        />
                                    </Grid>

                                    {
                                        isSubmitting && (
                                            <Grid item>
                                                <LinearProgress />
                                            </Grid>
                                        )
                                    }


                                    <Grid item >
                                        <ButtonWrapper>Submit</ButtonWrapper>
                                    </Grid>
                                    <Grid item>
                                        <SnackbarWrapper open={open} onClose={handleClose} />
                                    </Grid>
                            </Form>
                        )
                    }
                </Formik>
            </Grid>
    )

}