import {Container, Grid, InputLabel, LinearProgress, MenuItem, Typography,Input} from "@mui/material";
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
    name:string | null;
    info:string | null;
    referenceNumber:string | null;
    country:string | null;
    file?:any;
    id?: string;
}
const initialFormState = {
    name: null,
    info:null,
    referenceNumber:null,
    country:null,
}
interface ProductFormInterface{
    alterProduct(values:ProductFormValuesInterface): Promise<void>;
    isUpdateForm:boolean;
}

const validationSchema = object({
    name: string().required("Name required"),
    info: string().required("Info required"),
    referenceNumber: number().required("Reference Number required"),
    country: string().required("Country required"),
})
export default ({alterProduct,isUpdateForm}:ProductFormInterface) => {
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
                <Formik
                    initialValues={initialFormState}
                    validationSchema={!isUpdateForm ? validationSchema : null}
                    onSubmit={submitHandler}
                >
                    {
                        ({ isSubmitting,setFieldValue }) => (
                            <Form>

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
                                        <Grid item p={1}>
                                        <InputLabel>Image</InputLabel>
                                            <Input id={"file"} name={"file"} type={"file"} inputProps={{ accept: 'image/*' }} onChange={(event) => {
                                                // @ts-ignore
                                                setFieldValue("file", event.currentTarget.files[0]);
                                            }} />
                                        </Grid>
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
    )

}