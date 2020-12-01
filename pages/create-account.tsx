import { Box, createStyles, Link, makeStyles, Theme } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import InputAdornment from '@material-ui/core/InputAdornment';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockIcon from '@material-ui/icons/Lock';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import CopyrightComponent from '../components/screen/Copyright/Copyright';
import NextLink from 'next/link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap-reverse',
      height: '100vh',
      gap: theme.spacing(10),
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
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export default function CreateAccountPage() {
  const classes = useStyles();

  const initialValues: IFormData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const formSchema = Yup.object().shape({
    name: Yup.string()
      .required('Obrigatório')
      .min(2, 'O nome deve ter pelo menos 2 caracteres'),
    email: Yup.string().email('E-mail inválido').required('Obrigatório'),
    password: Yup.string().required('Obrigatório'),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: formSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={classes.root}>
      <Paper className={classes.form} elevation={3}>
        <Box textAlign="center">
          <Typography component="h4" variant="h4">
            Crie sua conta
          </Typography>
        </Box>

        <form noValidate onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="name"
            placeholder="Seu nome"
            name="name"
            autoComplete="name"
            autoFocus
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
            onChange={formik.handleChange}
            value={formik.values.name}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
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
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            placeholder="Uma senha"
            type="password"
            id="password"
            autoComplete="current-password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="confirmPassword"
            placeholder="Confirme sua senha"
            type="password"
            id="confirmPassword"
            autoComplete="off"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
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
            Criar minha conta
          </Button>
        </form>

        <p>
          Ao se registrar, você concorda com os{' '}
          <Link href="#">termos de uso</Link> e a{' '}
          <Link href="#">política de privacidade</Link> do app.
        </p>

        <Divider className={classes.divider} variant="fullWidth" />

        <CopyrightComponent />
      </Paper>
      <div>
        <Typography className={classes.sloganTitle} variant="h2" component="h1">
          Next Boilerplate
        </Typography>
        <Typography variant="h3" component="h2">
          Um slogan aqui
        </Typography>
        <Box mt={10}>
          <NextLink href="login" passHref>
            <Button color="primary" startIcon={<ArrowBackIcon />}>
              Voltar
            </Button>
          </NextLink>
        </Box>
      </div>
    </div>
  );
}
