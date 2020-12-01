import { createStyles, makeStyles, Theme } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockIcon from '@material-ui/icons/Lock';
import MailIcon from '@material-ui/icons/Mail';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import CopyrightComponent from '../components/screen/Copyright/Copyright';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      height: '100vh',
      gap: theme.spacing(10),
      padding: theme.spacing(2),
    },    
    sloganTitle: {
      marginBottom: theme.spacing(2)
    },
    form: {
      padding: theme.spacing(4),
      maxWidth: '500px'
    },
    submit: {
      marginTop: theme.spacing(2)
    },
    divider: {
      margin: theme.spacing(4, 0)
    }
  })
);
 

interface IFormData {
  email?: string;
  password?: string;
}

export default function LoginPage() {
  const classes = useStyles();

  const initialValues: IFormData = {
    email: '',
    password: '',
  };
  
  const formSchema = Yup.object().shape({
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
      <div>
        <Typography className={classes.sloganTitle} variant="h2" component="h1">
          Next Boilerplate
        </Typography>
        <Typography variant="h3" component="h2">
          Um slogan aqui
        </Typography>
      </div>
      <Paper className={classes.form} elevation={3}>
        <form noValidate onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            placeholder="E-mail"
            name="email"
            autoComplete="email"
            autoFocus
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
            placeholder="Senha"
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
          <Button
            className={classes.submit}
            type="submit"
            size="large"
            fullWidth
            variant="contained"
            color="primary"
            disabled={formik.isSubmitting}
          >
            Entrar
          </Button>
        </form>

        <Divider className={classes.divider} variant="fullWidth" />

        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Button variant="text" fullWidth={true}>
              Esqueceu a senha?
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button variant="text" fullWidth={true}>
              Criar uma conta
            </Button>
          </Grid>
        </Grid>
        <CopyrightComponent />
      </Paper>
    </div>
  );
}
