import { PersonSearch } from "@mui/icons-material";
import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { getDatabyRut } from "../../api/callApi";
import { JournalLayout } from "../../journal/layout/JournalLayout";
import { IngresoVis } from "../components/IngresoVis";

export const IngresoPage = () => {
  const [dataAseg, setDataAseg] = useState({});

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async ({ rutAseg }) => {
    //consulta info aseg
    const resp = await getDatabyRut({ rutAseg });
    setDataAseg(resp);
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
              autoComplete="off"
            />
          </Grid>

          <Grid item xs={12} sm={8}>
            <Button type="submit" variant="contained" startIcon={<PersonSearch/>}>
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
        <IngresoVis data={dataAseg} />
      </Grid>
    </JournalLayout>
  );
};
