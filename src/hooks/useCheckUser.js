import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/auth/authSlice";

export const useCheckUser = () => {
  const { status } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    const validateInfoUser = () => {
      const infoUser = JSON.parse(localStorage.getItem("usr"));
      if (infoUser == null) return dispatch(logout());

      const { displayName, email, listMenu } = infoUser;

      dispatch(login({ displayName, email, listMenu }));
    };
    validateInfoUser();
  }, []);

  return {
    status,
  };
};
