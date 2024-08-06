import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Avatar,
  Box,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
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

const ProfileSection = () => {
  const [profileImage, setProfileImage] = useState("https://picsum.photos/100");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div>
      <Box display="flex" alignItems="center" mb={2}>
        <Typography variant="h5" gutterBottom>
          Profile
        </Typography>
        <Box flexGrow={1} height="2px" bgcolor="grey.500" ml={2}></Box>
      </Box>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={3}>
              <Box
                position="relative"
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100%"
              >
                <Avatar
                  sx={{ width: 100, height: 100, marginBottom: 7 }}
                  src={profileImage}
                  alt="Profile"
                />
                <IconButton
                  component="label"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: "32%",
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    backgroundColor: "rgba(0, 0, 0, 0.0)",
                    color: "white",
                    opacity: 0,
                    "&:hover": {
                      opacity: 1,
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                    },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <EditIcon />
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleImageChange}
                  />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField fullWidth label="Name" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    disabled
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box display="flex" justifyContent="flex-end">
                    <Button variant="contained" color="primary">
                      Save Changes
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </div>
  );
};

export default ProfileSection;
