import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { JournalLayout } from "../../journal/layout/JournalLayout";
import { IngresoVis } from "../components/IngresoVis";

export const IngresoVisacion = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    console.log(e);
  };

  return (
    <JournalLayout>
      <Typography sx={{ mb: 1 }} variant="h6">
        Ingreso Visación
      </Typography>
      <Divider />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
          sx={{ mt: 1 }}
        >
          <Grid item xs={12} sm={4}>
            <TextField
              {...register("rutAseg", { required: true, minLength: 9 })}
              size="small"
              fullWidth
              label="Rut Asegurado"
            />
          </Grid>

          <Grid item xs={12} sm={8}>
            <Button type="submit" variant="contained">
              Buscar
            </Button>
          </Grid>
        </Grid>
        {errors.rutAseg && (
          <Grid container>
            <Typography sx={{ mt: 1 }} variant="p" color="error.main">
              El rut es requerido
            </Typography>
          </Grid>
        )}
      </form>

      <Grid container>
            <IngresoVis/>
      </Grid>
    </JournalLayout>
  );
};
