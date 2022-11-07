import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import { esES } from "@mui/material/locale";

export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: "#262254",
    },
    secondary: {
      main: "#543884",
    },
    error: {
      main: red[500],
    },
  },
  esES,
});
