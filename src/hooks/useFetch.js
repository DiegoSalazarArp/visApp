import { useState, useEffect } from "react";

export const useFetch = (url, body) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    setState({
      ...state,
      isLoading: false,
    });
    const resp = await fetch(url, {
      body: JSON.stringify(body),
      method: "POST",
    });
    const data = await resp.json();

    setState({
      data,
      isLoading: false,
      hasError,
    });

    useEffect(() => {
      getFetch();
    }, [url]);
  };
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
