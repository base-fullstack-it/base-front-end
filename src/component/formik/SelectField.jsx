import React from "react";
import { useField } from "formik";
import {Select} from "@mui/material";

const SelectFieldWrapper = ({ name, children,...otherProps }) => {
  const [field, meta] = useField(name);

  const configTextField = {
    fullWidth: true,
    variant: "outlined",
    ...field,
    // "named" props above apply to all
    // SelectField present.
    // "otherProps" below can be custom tailored
    // to particular Text/Date etc. Fields
    // such as label, type, id, etc.
    ...otherProps
  };

  // meta object containes
  // submitForm, isSubmitting, touched, errors
  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return <Select {...configTextField} >
    {children}
  </Select>;
};

export default SelectFieldWrapper;
