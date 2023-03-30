import React from "react";
import * as Yup from "yup";
import styled from "@emotion/styled";

import { Formik } from "formik";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import {
  Alert as MuiAlert,
  Box,
  Button as MuiButton,
  Card as MuiCard,
  CardContent,
  CircularProgress,
  Grid,
  TextField as MuiTextField,
  Typography,
  FormControl as MuiFormControl,
} from "@mui/material";
import { spacing } from "@mui/system";

const Card = styled(MuiCard)(spacing);

const Alert = styled(MuiAlert)(spacing);

const TextField = styled(MuiTextField)(spacing);

const Button = styled(MuiButton)(spacing);

const timeOut = (time) => new Promise((res) => setTimeout(res, time));

const FormControlSpacing = styled(MuiFormControl)(spacing);

const FormControl = styled(FormControlSpacing)`
  min-width: 148px;
`;

const initialValues = {
  studentName: "",
  studentSection: "",
  grade: "",
};

const validationSchema = Yup.object().shape({
  studentName: Yup.string().required("Required"),
  studentSection: Yup.string().required("Required"),
  grade: Yup.string().required("Required"),
});

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (
    values,
    { resetForm, setErrors, setStatus, setSubmitting }
  ) => {
    try {
      await timeOut(1500);
      resetForm();
      setStatus({ sent: true });
      setSubmitting(false);
      const response = await axios.post(
        "http://localhost:3001/api/create_activity",
        { ...values }
      );
      console.log(response.data.message);
    } catch (error) {
      setStatus({ sent: false });
      setErrors({ submit: error.message });
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "right", mb: 2 }}>
        <Button variant="contained" onClick={handleClickOpen}>
          ADD
        </Button>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        fullWidth
        maxWidth="md"
      >
        <DialogContent>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
              status,
            }) => (
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Student Entry
                  </Typography>

                  {status && status.sent && (
                    <Alert severity="success" my={3}>
                      Your data has been submitted successfully!
                    </Alert>
                  )}

                  {isSubmitting ? (
                    <Box display="flex" justifyContent="center" my={6}>
                      <CircularProgress />
                    </Box>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <Grid container spacing={{ xs: 1.5, md: 6 }}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            name="studentName"
                            label="Student Name"
                            value={values.studentName}
                            error={Boolean(
                              touched.studentName && errors.studentName
                            )}
                            fullWidth
                            helperText={
                              touched.studentName && errors.studentName
                            }
                            onBlur={handleBlur}
                            onChange={handleChange}
                            variant="outlined"
                            my={2}
                            required
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            name="studentSection"
                            label="Student Section"
                            value={values.studentSection}
                            error={Boolean(
                              touched.studentSection && errors.studentSection
                            )}
                            fullWidth
                            helperText={
                              touched.studentSection && errors.studentSection
                            }
                            onBlur={handleBlur}
                            onChange={handleChange}
                            variant="outlined"
                            my={2}
                            required
                          />
                        </Grid>
                      </Grid>

                      <Grid container spacing={{ xs: 1.5, md: 6 }}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            name="grade"
                            label="Grade"
                            value={values.grade}
                            error={Boolean(touched.grade && errors.grade)}
                            fullWidth
                            helperText={touched.grade && errors.grade}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            variant="outlined"
                            my={2}
                            required
                          />
                        </Grid>
                      </Grid>

                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        mt={3}
                      >
                        Save Data
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            )}
          </Formik>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
