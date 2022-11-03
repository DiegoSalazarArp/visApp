import { Button, Divider, Grid } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthLayout } from "../../auth/layout/AuthLayout";
import { logout } from "../../store/auth/authSlice";
import { startSelectedProfile } from "../../store/auth/thunks";

export const SelectProfile = () => {
  const { uid, listProfile } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const selectProfileUser = (idSession) => {
    dispatch(startSelectedProfile(idSession, uid));
  };

  const goBack = () => {
    dispatch(logout())
  };

  return (
    <AuthLayout title="Seleccione el perfil">
      <Divider />
      <form className="animate__animated animate__fadeIn animate_faster">
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            {listProfile.map((item) => (
              <Button
                sx={{ mb: 2 }}
                fullWidth
                variant="contained"
                key={item}
                onClick={() => {
                  selectProfileUser(item.IdSesion);
                }}
              >
                {item.IdSesion} - {item.Descripcion}
              </Button>
            ))}
            <Button fullWidth variant="contained" color="info" onClick={goBack} sx={{mt:2}}>
              Regresar
            </Button>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
