import { Box, createStyles, makeStyles, Theme } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import InputAdornment from '@material-ui/core/InputAdornment';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MailIcon from '@material-ui/icons/Mail';
import { useFormik } from 'formik';
import NextLink from 'next/link';
import React from 'react';
import * as Yup from 'yup';
import CopyrightComponent from '../components/screen/Copyright/Copyright';
import FormLoadingComponent from '../components/screen/FormLoading/FormLoading';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: theme.spacing(2),
    },
    sloganTitle: {
      marginBottom: theme.spacing(2),
    },
    form: {
      padding: theme.spacing(4),
      maxWidth: '500px',
    },
    submit: {
      marginTop: theme.spacing(2),
    },
    divider: {
      margin: theme.spacing(4, 0),
    },
  })
);

interface IFormData {
  email?: string;
}

export default function CreateAccountPage() {
  const classes = useStyles();

  const initialValues: IFormData = {
    email: '',
  };

  const formSchema = Yup.object().shape({
    email: Yup.string().email('E-mail inválido').required('Obrigatório'),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: formSchema,
    onSubmit: (values) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        formik.setSubmitting(false);
      }, 3000);
    },
  });

  return (
    <div className={classes.root}>
      <Paper className={classes.form} elevation={3}>
        <Box textAlign="center">
          <Typography component="h3" variant="h5">
            Esqueceu sua senha?
          </Typography>
        </Box>

        <form noValidate onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            placeholder="Seu e-mail"
            name="email"
            autoComplete="email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailIcon />
                </InputAdornment>
              ),
            }}
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <Button
            className={classes.submit}
            type="submit"
            size="large"
            fullWidth
            variant="contained"
            color="primary"
            disabled={formik.isSubmitting}
          >
            Esqueci a minha senha
          </Button>
          {formik.isSubmitting && <FormLoadingComponent />}
        </form>

        <Divider className={classes.divider} variant="fullWidth" />

        <Box mt={1} textAlign="center">
          <NextLink href="login" passHref>
            <Button color="primary" startIcon={<ArrowBackIcon />}>
              Voltar
            </Button>
          </NextLink>
        </Box>

        <CopyrightComponent />
      </Paper>
    </div>
  );
}
