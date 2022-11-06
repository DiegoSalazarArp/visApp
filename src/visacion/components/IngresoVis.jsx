import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { formatValue, convertBase64 } from "../utils";

export const IngresoVis = ({data}) => {
  const { register, handleSubmit } = useForm();

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));


  const test = async () => {
    if (acceptedFiles.length == 0) return;
    const base64 = await convertBase64(acceptedFiles[0]);
    return base64;
  };

  // console.log(acceptedFiles[0])

  const valueDate = formatValue();

  const onSubmit = async (e) => {
    const base64 = await test();
    Object.assign(e, {
      base64,
    });
    console.log("e", e);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          direction="row"
          spacing={3}
          container
          sx={{ mt: 1 }}
          alignItems="center"
        >
          <Grid item sm={12}>
            <Typography variant="h6">Información del usuario:</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              type="text"
              size="small"
              fullWidth
              label="Nombre"
              {...register("nombre")}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              type="text"
              size="small"
              fullWidth
              label="Apellido Paterno"
              {...register("aPaterno")}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              type="text"
              size="small"
              fullWidth
              label="Apellido Materno"
              {...register("aMaterno")}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              size="small"
              fullWidth
              defaultValue={valueDate}
              label="Fecha solicitud"
              type="date"
              {...register("fechaSolicitud")}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              type="text"
              size="small"
              fullWidth
              label="Beneficiario"
              {...register("beneficiario")}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              size="small"
              fullWidth
              label="Visación beneficiario"
              type="text"
              {...register("visBenef")}
            />
          </Grid>

          <Grid sx={{ mt: 1 }} item xs={12} sm={12}>
            <FormControl>
              <FormLabel defaultValue="0">
                ¿El reclamante es igual al asegurado? 
              </FormLabel>
              <RadioGroup row>
                <FormControlLabel value="0" control={<Radio />} label="Si" />
                <FormControlLabel value="1" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item sx={{ mt: 1 }}>
            <Typography variant="h6">Subir archivos:</Typography>
          </Grid>

          <Grid
            item
            alignItems="center"
            justifyContent="center"
            sx={{
              backgroundColor: "whitesmoke",
              mt: 3,
              ml: 3,
              borderRadius: 3,
              border: 1,
              borderColor: "white",
            }}
            xs={12}
            sm={12}
          >
            <div {...getRootProps({ className: "container" })}>
              <input {...getInputProps()} />
              <Typography variant="h6" align="center" color="gray">
                Arrastre y suelte algunos archivos aquí, o haga clic para
                seleccionarlos
              </Typography>
            </div>
            <aside>
              <Typography variant="subtitle2" color="gray">
                Archivos
              </Typography>
              <ul>{files}</ul>
            </aside>
          </Grid>

          <Grid item xs={12} sm={12}>
            <Button type="submit" variant="contained" fullWidth>
              Ingresar
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
