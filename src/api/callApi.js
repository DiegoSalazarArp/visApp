import { baseData } from "../enviroment/env";

export const getDatabyRut = async ({ rutAseg }) => {
  try {
    const { apiURL, TokenUser, TokenPass } = baseData;

    const body = {
      RutAseg: rutAseg,
      Compania: "1",
      TokenUser,
      TokenPass,
    };

    const baseURL = `${apiURL}Visaciones/Asegurado`;
    
    const resp = await fetch(baseURL, {
      method: "POST",
      headers: { "Content-type": "application/json;charset=UTF-8" },
      body,
    }).then((data) => data.json());

    return {
      ok: true,
      data: resp,
    };
  } catch (error) {
    return {
      ok: false,
      error: error.Message,
    };
  }
};
