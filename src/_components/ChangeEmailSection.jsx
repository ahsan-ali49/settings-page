import React from "react";
import { Grid, TextField, Button, Typography, Box } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const onSubmit = async (values) => {
  const { email, password } = values;

  console.log("email: ", email);
  console.log("password: ", password);
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Must be 6 or more characters")
    .required("Required"),
});

const ChangeEmailSection = () => {
  return (
    <div>
      <Box display="flex" alignItems="center" mb={2}>
        <Typography variant="h5" gutterBottom>
          Change Email
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
                name="email"
                id="email"
                type="email"
                label="New Email"
                variant="outlined"
              />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red", marginTop: "0.5rem" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                as={TextField}
                fullWidth
                name="password"
                id="password"
                label="Password"
                type="password"
                variant="outlined"
              />
              <ErrorMessage
                name="password"
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

export default ChangeEmailSection;
