import { Button, Grid, TextField, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    // div

    <AuthLayout title="Login">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Diego Salazar"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="Ingresar correo"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Ingresar contraseña"
              fullWidth
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                Crear cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Typography sx={{mr:2}}>¿Ya tienes una cuenta?</Typography>
            <Link color="inherit" to="/auth/login" component={RouterLink}>
              Ingresar
            </Link>
          </Grid>
          
        </Grid>
      </form>
    </AuthLayout>
  );
};
