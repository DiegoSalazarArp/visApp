import {
  Button,
  Divider,
  Grid,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useDropzone } from "react-dropzone";
import { formatValue, convertBase64 } from "../utils";

export const IngresoVis = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));


  const sendDataAPI = {
    nombre: '',
    aPaterno: '',
    archivos: [
      {
        nombreArchivo: '',
        base64: ''
      }
    ]
  }

  const test = async () => {
    
    const base64 = await convertBase64(acceptedFiles[0]);
    console.log(base64);
  };

  console.log(acceptedFiles[0])

  const valueDate = formatValue();

  return (
    <>
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
          <TextField type="text" size="small" fullWidth label="Nombre" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            type="text"
            size="small"
            fullWidth
            label="Apellido Paterno"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            type="text"
            size="small"
            fullWidth
            label="Apellido Materno"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            size="small"
            fullWidth
            defaultValue={valueDate}
            label="Fecha solicitud"
            type="date"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField type="text" size="small" fullWidth label="Beneficiario" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            size="small"
            fullWidth
            label="Visación beneficiario"
            type="text"
          />
        </Grid>

        <Grid item sx={{ mt: 3 }}>
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
          <Button type="submit" variant="contained" fullWidth onClick={test}>
            Ingresar
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
