import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./input.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "../src/store/Store.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
