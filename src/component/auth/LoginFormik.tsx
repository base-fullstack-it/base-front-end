import {Container, Grid, LinearProgress, Typography} from "@mui/material";
import React, {useState} from "react";
import {boolean, date, number, object, string} from "yup";
import {Form, Formik} from 'formik';
import ButtonWrapper from "../formik/Button";
import SnackbarWrapper from "../formik/Snackbar";
import TextFieldWrapper from "../formik/TextField";
import {useLoginUserMutation} from "../../redux/api_slice/authApiSlice";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../redux/hooks";

export interface LoginFormValuesInterface {
    username:string;
    password:string;
}
const initialFormState = {
    username: "",
    password:"",
}
interface LoginFormInterface{
    loginUser(values:LoginFormValuesInterface): Promise<void>;
}

const validationSchema = object({
    // email: string().email("Invalid email").required("Email required"),
    username: string().required("Username required"),
    password: string().required("Password required"),
})
export default ({loginUser}:LoginFormInterface) => {

    const [open, setOpen] = useState(false)
    const submitHandler = async (values:LoginFormValuesInterface, actions:any) => {
            actions.setSubmitting(false);
            setOpen(true);
            // console.log(values,'SUBMISS'); // test
        await loginUser(values);
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
                                            Login
                                        </Typography>
                                    </Grid>

                                    <Grid p={1} item>
                                        <TextFieldWrapper
                                            name='username'
                                            label="Username"
                                            type='text'
                                        />
                                    </Grid>
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
                                        <ButtonWrapper>Login</ButtonWrapper>
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