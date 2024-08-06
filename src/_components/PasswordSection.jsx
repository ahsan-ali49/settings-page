import React from "react";
import { Grid, TextField, Button, Typography, Box } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

const onSubmit = async (values) => {
  const { currentPassword, newPassword, confirmPassword } = values;

  console.log("currentPassword: ", currentPassword);
  console.log("newPassword: ", newPassword);
  console.log("confirmPassword: ", confirmPassword);
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  currentPassword: Yup.string()
    .min(6, "Must be 6 or more characters")
    .required("Required"),
  newPassword: Yup.string()
    .min(6, "Must be 6 or more characters")
    .required("Required"),
  confirmPassword: Yup.string()
    .min(6, "Must be 6 or more characters")
    .required("Required"),
});

const PasswordSection = () => {
  return (
    <div>
      <Box display="flex" alignItems="center" mb={2}>
        <Typography variant="h5" gutterBottom>
          Password
        </Typography>
        <Box flexGrow={1} height="2px" bgcolor="grey.500" ml={2}></Box>
      </Box>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Field
                as={TextField}
                fullWidth
                name="currentPassword"
                id="currentPassword"
                label="Current Password"
                type="password"
                variant="outlined"
              />
              <ErrorMessage
                name="currentPassword"
                component="div"
                style={{ color: "red", marginTop: "0.5rem" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                as={TextField}
                fullWidth
                name="newPassword"
                id="newPassword"
                label="New Password"
                type="password"
                variant="outlined"
              />
              <ErrorMessage
                name="newPassword"
                component="div"
                style={{ color: "red", marginTop: "0.5rem" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                as={TextField}
                fullWidth
                name="confirmPassword"
                id="confirmPassword"
                label="Confirm Password"
                type="password"
                variant="outlined"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                style={{ color: "red", marginTop: "0.5rem" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="flex-end">
                <Button type="submit" variant="contained" color="primary">
                  Update
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </div>
  );
};

export default PasswordSection;
