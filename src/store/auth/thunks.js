import {
  RegisterUserWithEmailAndPassword,
  signInWithGoogle,
  loginWithEmailPassword,
  logoutFirebase,
  loginMok,
  loginMokSessions,
  userInfo,
  generateJWT,
} from "../../auth/firebase/providers";
import { checkingCredentials, login, logout, pending } from "./authSlice";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => { 
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await signInWithGoogle();

    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailAndPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, photoURL, errorMessage } =
      await RegisterUserWithEmailAndPassword({ email, password, displayName });

    if (!ok) return dispatch(logout({ errorMessage }));

    dispatch(login({ uid, displayName, email, photoURL }));
  };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await loginWithEmailPassword({ email, password });
    if (!result.ok) return dispatch(logout(result));

    dispatch(login(result));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();

    dispatch(logout({}));
  };
};



export const startLoginMok = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await loginMok({ email, password });
    if (!result.ok || result.codigo !== 0) return dispatch(logout(result));

    const data = result.uid;

    const sessions = await loginMokSessions(data);
    if (!sessions.ok) return dispatch(logout(sessions));

    // Si la cantidad de sesiones = 1, entonces ingresa al login automaticamente, sino, el state = 'pending'
    if (sessions.data.length == 1) {
      const idSession = sessions.data[0].IdSesion;

      const jwt = await generateJWT(idSession, result.uid);
      if (!jwt.ok) return dispatch(logout(jwt));

      const userInfoMok = await userInfo(jwt.token);

      localStorage.setItem("usr", JSON.stringify(userInfoMok));
      dispatch(login(userInfoMok));
    } else {
      dispatch(pending({ uid: data, listProfile: sessions.data }));
    }
  };
};

export const startSelectedProfile = (idSession, tkn) => {
  return async (dispatch) => {
    const jwt = await generateJWT(idSession, tkn);
    if (!jwt.ok) return dispatch(logout(jwt));

    const userInfoMok = await userInfo(jwt.token);
    localStorage.setItem("usr", JSON.stringify(userInfoMok));
    dispatch(login(userInfoMok));
  };
};
