import { Google } from "@mui/icons-material";
import { Button, Grid, TextField, Typography, Link } from "@mui/material";
import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth/thunks";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {

const dispatch = useDispatch();

  const { email, password, onInputChange, formState } = useForm({
    email: "diego.salazar@gmail.com",
    password: "123456",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);

    dispatch(checkingAuthentication(email, password))

  };

  const onGoogleSignIn = (event) =>{
    event.preventDefault();
    dispatch(startGoogleSignIn())
  }
  return (
    <AuthLayout title="Login">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Usuario"
              type="email"
              placeholder="Ingresar correo"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Ingresar contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                onClick={onSubmit}
              >
                Ingresar
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                onClick={onGoogleSignIn}
              >
                <Google/>
                <Typography sx={{ml:1}}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link color="inherit" to="/auth/register" component={RouterLink}>
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
