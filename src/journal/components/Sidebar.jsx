import { TurnedInNot, Add, Home, ManageSearch, ForkRight, Article } from "@mui/icons-material";
import {
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

export const Sidebar = ({ drawerWidth = 240 }) => {
  const { displayName, email, listMenu } = useSelector((state) => state.auth);
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Link
            color="inherit"
            to="/"
            component={RouterLink}
            style={{ textDecoration: "none" }}
          >
            <Grid container direction="row" alignItems="center">
              <Typography variant="h6" noWrap component="div">
                {displayName}
              </Typography>

              <IconButton color="default">
                <Home />
              </IconButton>
            </Grid>
          </Link>
        </Toolbar>
        <Divider />
        <List>
          {/* {
              listMenu.map((item) => (
                <Link key={item.MenuCod}
                color="inherit"
                to="/ingresoVisacion"
                component={RouterLink}
                style={{ textDecoration: "none" }}
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Add />
                    </ListItemIcon>
                    <Grid container>
                      <ListItemText primary="Ingreso Visación" />
                    </Grid>
                  </ListItemButton>
                </ListItem>
              </Link>
              ))
          } */}
          <Link
            color="inherit"
            to="/ingresoVisacion"
            component={RouterLink}
            style={{ textDecoration: "none" }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Add />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary="Ingreso Visación" />
                </Grid>
              </ListItemButton>
            </ListItem>
          </Link>
          <Link
            color="inherit"
            to="/seguimientoVisacion"
            component={RouterLink}
            style={{ textDecoration: "none" }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ManageSearch />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary="Seguimiento Visación" />
                </Grid>
              </ListItemButton>
            </ListItem>
          </Link>
          <Link
            color="inherit"
            to="/objetadasVisacion"
            component={RouterLink}
            style={{ textDecoration: "none" }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ForkRight />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary="Visación Objetadas" />
                </Grid>
              </ListItemButton>
            </ListItem>
          </Link>
          <Link
            color="inherit"
            to="/reporteVisacion"
            component={RouterLink}
            style={{ textDecoration: "none" }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Article />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary="Reportes Visación" />
                </Grid>
              </ListItemButton>
            </ListItem>
          </Link>

          {/* {["Ingreso Visacion", "Febrero", "Marzo", "Abril"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={text} />
                  <ListItemText secondary={"lorem impsum"} />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))} */}
        </List>
      </Drawer>
    </Box>
  );
};
