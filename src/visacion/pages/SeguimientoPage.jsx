import { ManageSearch } from "@mui/icons-material";
import {
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import React from "react";
import { JournalLayout } from "../../journal/layout/JournalLayout";
import { formatValue } from "../utils";

const CustomToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
};

export const SeguimientoPage = () => {
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

  const valueDate = formatValue();

  const onClickRow = () => {
    console.log("asd");
  };

  return (
    <JournalLayout>
      <Typography sx={{ mb: 1 }} variant="h6">
        Seguimiento Visación
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
        <Grid item xs={12} sm={3}>
          <TextField
            size="small"
            fullWidth
            defaultValue={valueDate}
            label="Fecha desde"
            type="date"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            size="small"
            fullWidth
            defaultValue={valueDate}
            label="Fecha hasta"
            type="date"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">Estado</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={10}
              label="Estado"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button type="submit" variant="contained" fullWidth startIcon={<ManageSearch/>}>
            Consultar
          </Button>
        </Grid>
      </Grid>
      <Grid item sx={{ mt: 4 }}>
        <Divider />
      </Grid>
      <Grid item sx={{ height: 300, width: "100%", mt: 3 }}>
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
    </JournalLayout>
  );
};
