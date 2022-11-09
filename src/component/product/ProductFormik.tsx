import {Container, Grid, InputLabel, LinearProgress, MenuItem, Typography} from "@mui/material";
import React, {useState} from "react";
import {boolean, date, number, object, string} from "yup";
import {Field, Form, Formik, useFormikContext} from 'formik';
import ButtonWrapper from "../formik/Button";
import SnackbarWrapper from "../formik/Snackbar";
import TextFieldWrapper from "../formik/TextField";
import SelectField from "../formik/SelectField";
import {CountryEnum} from "../../model/Country.enum";

//Product Id will be uniquely created in the database based on an auto increment instead of a form value?
//
//    readonly id: string;
//     readonly name: string;
//     readonly info: string;
//     readonly referenceNumber: string;
//     readonly country: string;
export interface ProductFormValuesInterface {
    name:string;
    info:string;
    referenceNumber:string;
    country:string;
    file?:any;
}
const initialFormState = {
    name: "",
    info:"",
    referenceNumber:"",
    country:"",
}
interface ProductFormInterface{
    alterProduct(values:ProductFormValuesInterface): Promise<void>;
}

const validationSchema = object({
    name: string().required("Name required"),
    info: string().required("Info required"),
    referenceNumber: number().required("Reference Number required"),
    country: string().required("Country required"),
})
export default ({alterProduct}:ProductFormInterface) => {
    const [open, setOpen] = useState(false)

    // actions = { setSubmitting, resetForm, isSubmitting }
    const submitHandler = async (values:ProductFormValuesInterface, actions:any) => {

        // console.log(values,'SUBMISS'); // test
        await alterProduct(values);
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
                        ({ isSubmitting,setFieldValue }) => (
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
                                            name='referenceNumber'
                                            label="Reference Number"
                                            type='text'
                                        />
                                    </Grid>
                                    <Grid p={1} item>
                                        {/*<TextFieldWrapper*/}
                                        {/*    name='country'*/}
                                        {/*    label="Country"*/}
                                        {/*    type='select'*/}
                                        {/*/>*/}
                                        <InputLabel id="demo-simple-select-label">Country</InputLabel>
                                        <SelectField
                                            name={"country"}
                                            label={"Country"}
                                            type={"select"}
                                        >
                                            {

                                                Object.entries(CountryEnum).map(([key,value]) =>
                                                    <MenuItem key={key} value={value}>
                                                        {key}
                                                </MenuItem>
                                                )}

                                        </SelectField>
                                        <input id="file" name="file" type="file" onChange={(event) => {
                                            // @ts-ignore
                                            setFieldValue("file", event.currentTarget.files[0]);
                                        }} />
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