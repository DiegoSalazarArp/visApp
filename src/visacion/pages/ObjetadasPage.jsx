import { Update } from "@mui/icons-material";
import { Button, Divider, Grid, Typography } from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import React from "react";
import { JournalLayout } from "../../journal/layout/JournalLayout";

const CustomToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
};

export const ObjetadasPage = () => {
  const onClickRow = () => {
    console.log("asd");
  };

  const rows = [
    { id: 1, col1: "Hello", col2: "World" },
    { id: 2, col1: "DataGridPro", col2: "is Awesome" },
    { id: 3, col1: "MUI", col2: "is Amazing" },
    { id: 4, col1: "Hello", col2: "World" },
    { id: 5, col1: "DataGridPro", col2: "is Awesome" },
    { id: 6, col1: "MUI", col2: "is Amazing" },
    { id: 7, col1: "Hello", col2: "World" },
    { id: 8, col1: "DataGridPro", col2: "is Awesome" },
    { id: 9, col1: "MUI", col2: "is Amazing" },
    { id: 10, col1: "Hello", col2: "World" },
    { id: 11, col1: "DataGridPro", col2: "is Awesome" },
    { id: 12, col1: "MUI", col2: "is Amazing" },
    { id: 13, col1: "Hello", col2: "World" },
    { id: 14, col1: "DataGridPro", col2: "is Awesome" },
    { id: 15, col1: "MUI", col2: "is Amazing" },
    { id: 16, col1: "Hello", col2: "World" },
    { id: 17, col1: "DataGridPro", col2: "is Awesome" },
    { id: 18, col1: "MUI", col2: "is Amazing" },
    { id: 19, col1: "Hello", col2: "World" },
    { id: 20, col1: "DataGridPro", col2: "is Awesome" },
    { id: 21, col1: "MUI", col2: "is Amazing" },
    { id: 22, col1: "Hello", col2: "World" },
    { id: 23, col1: "DataGridPro", col2: "is Awesome" },
    { id: 24, col1: "MUI", col2: "is Amazing" },
    { id: 25, col1: "Hello", col2: "World" },
    { id: 26, col1: "DataGridPro", col2: "is Awesome" },
    { id: 27, col1: "MUI", col2: "is Amazing" },
    { id: 28, col1: "Hello", col2: "World" },
    { id: 29, col1: "DataGridPro", col2: "is Awesome" },
    { id: 30, col1: "MUI", col2: "is Amazing" },
    { id: 31, col1: "Hello", col2: "World" },
    { id: 32, col1: "DataGridPro", col2: "is Awesome" },
    { id: 33, col1: "MUI", col2: "is Amazing" },
  ];

  const columns = [
    { field: "col1", headerName: "Fecha ingreso", width: 110 },
    { field: "col2", headerName: "Fecha sol. cliente", width: 130 },
    { field: "col3", headerName: "Rut titular", width: 100 },
    { field: "col4", headerName: "Nombre titular", width: 130 },
    { field: "col5", headerName: "Rut beneficiario", width: 150 },
    { field: "col6", headerName: "Vis Beneficios", width: 120 },
    { field: "col7", headerName: "Estado", width: 80 },
    { field: "col8", headerName: "Fecha dictamen final", width: 150 },
    { field: "col9", headerName: "Tipo Reclamo", width: 120 },
    { field: "col10", headerName: "Ajustador", width: 100 },
    { field: "col11", headerName: "Reclamo", width: 90 },
  ];

  return (
    <JournalLayout>
      <Typography sx={{ mb: 1 }} variant="h6">
        Visaciones Objetadas
      </Typography>
      <Divider />

      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
        sx={{ mt: 1 }}
      >
        <Grid container justifyContent="flex-end" sx={{ mt: 1 }}>
          <Button variant="contained" startIcon={<Update/>}>Actualizar</Button>
        </Grid>

        <Grid item xs={12} sm={12} sx={{ height: 300, width: "100%", mt: -1 }}>
          <DataGrid
            onRowDoubleClick={onClickRow}
            components={{ Toolbar: CustomToolbar }}
            rows={rows}
            columns={columns}
            pageSize={25}
            localeText={{
              toolbarExport: "Exportar CSV",
            }}
          />
        </Grid>
      </Grid>
    </JournalLayout>
  );
};
