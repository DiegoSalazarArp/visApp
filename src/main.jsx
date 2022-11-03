import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import "./styles.css";
import { VisApp } from "./VisApp";



ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <VisApp />
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>
);
