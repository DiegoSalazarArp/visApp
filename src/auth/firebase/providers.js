import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result);

    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok: false,
      errorMessage,
    };
  }
};

export const RegisterUserWithEmailAndPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = resp.user;

    //TODO: actualizar el displayName en firebase
    await updateProfile(FirebaseAuth.currentUser, { displayName });

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error) {
    return { ok: false, errorMessage: error.message };
  }
};

export const loginWithEmailPassword = async ({ email, password }) => {
  try {
    const resp = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL, displayName } = resp.user;

    return {
      ok: true,
      uid,
      photoURL,
      displayName,
    };
  } catch (error) {
    return { ok: false, errorMessage: error.message };
  }
};

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};

export const loginMok = async ({ email, password }) => {
  try {
    const body = {
      usr: email,
      pwd: password,
      sitiocod: 104,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    const resp = await fetch(
      `http://apisesionesdesa.grupomok.com/api/getLogin`,
      requestOptions
    ).then((data) => data.json());


    return {
      ok: true,
      uid: resp.data,
      codigo: resp.codigo,
      errorMessage: resp.mensaje,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.mensaje,
    };
  }
};

export const loginMokSessions = async (tkn) => {
  try {
    const resp = await fetch(
      `http://apisesionesdesa.grupomok.com/api/getSesiones?tkn=${tkn}`
    ).then((data) => data.json());

    return {
      ok: true,
      data: resp.data,
      errorMessage: resp.mensaje,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.Message,
    };
  }
};

export const generateJWT = async (idSession, tkn) => {
  try {
    const body = {
      idSesion: idSession,
      tkn: tkn,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    const resp = await fetch(
      "http://apisesionesdesa.grupomok.com/api/generateJWT",
      requestOptions
    ).then((data) => data.json());

    return {
      ok: true,
      token: resp.data,
      errorMessage: resp.mensaje,

      
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.Message,
    };
  }
};

export const userInfo = async (jwt) => {
  try {
    const requestOption = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + jwt,
      },
    };

    const resp = await fetch(
      "http://apisesionesdesa.grupomok.com/api/getInfoUser",
      requestOption
    ).then((data) => data.json());

    return {
      ok: true,
      displayName: resp.data.Usunombre,
      email: resp.data.UsuMail,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.Message,
    };
  }
};

export const getMenus = async (jwt) => {
  try {
    const requestOption = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + jwt,
      },
    };

    const resp = await fetch(
      "http://apisesionesdesa.grupomok.com/api/getMenu",
      requestOption
    ).then((data) => data.json());


    return {
      ok: true,
      data: resp.data,
    };

    // SitioNombre
      // MenuNombre
      // MenuDescripcion
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.Message,
    };
  }
};

