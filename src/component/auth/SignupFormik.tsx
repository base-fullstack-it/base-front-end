import {Container, Grid, LinearProgress, Typography} from "@mui/material";
import React, {useState} from "react";
import {boolean, date, number, object, string} from "yup";
import {Form, Formik} from 'formik';
import TextFieldWrapper from "../formik/TextField";
import ButtonWrapper from "../formik/Button";
import SnackbarWrapper from "../formik/Snackbar";


export interface SignupFormValuesInterface{
    username:string;
    password:string;
}
const initialFormState = {
    username: "",
    password:"",
}
interface SignupFormInterface{
    handleRegister(values:SignupFormValuesInterface): void;
}

const validationSchema = object({
    username: string().required("Name required"),
    // email: string().email("Invalid email").required("Email required"),
    password: string()
        .required("Password required")
        // .matches(
        //     /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        //     "Password must contain at least 8 characters, one uppercase, one number and one special case character"
        // ),
})
export default ({handleRegister}:SignupFormInterface) => {

    const [open, setOpen] = useState(false)

    // actions = { setSubmitting, resetForm, isSubmitting }
    const submitHandler = async (values:SignupFormValuesInterface, actions:any) => {
        // setTimeout(() => {
        // setSubmitting not needed with async
        actions.setSubmitting(false);
        // actions.resetForm(initialFormState);//TODO uncomment this it works well some sort of inbuilt function
        setOpen(true);
        console.log(values,'SUBMISS'); // test
        await handleRegister(values);
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
                                <Typography align={"center"} style={{ fontSize: "2rem" }}
                                >
                                    Signup
                                </Typography>
                            </Grid>
                            <Grid p={1} item>
                                <TextFieldWrapper
                                    name='username'
                                    label='Username'
                                    type='text'
                                />
                            </Grid>
                            {/*<Grid p={1} item>*/}
                            {/*    <TextFieldWrapper*/}
                            {/*        name='email'*/}
                            {/*        label="Email"*/}
                            {/*        type='email'*/}
                            {/*    />*/}
                            {/*</Grid>*/}
                            <Grid p={1} item>
                                <TextFieldWrapper
                                    name='password'
                                    label="Password"
                                    type='password'
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
                                <ButtonWrapper>Sign Up</ButtonWrapper>
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