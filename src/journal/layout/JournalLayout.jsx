import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { Navbar, Sidebar } from "../components";

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box
      sx={{ display: "flex", marginLeft: 6, marginRight: 6, mt:2 }}
      className="animate__animated animate__fadeIn animate_faster"
    >
      <Navbar drawerWidth={drawerWidth} />

      <Sidebar drawerWidth={drawerWidth} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar></Toolbar>

        {children}
      </Box>
    </Box>
  );
};
