import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <p className="text-center text-muted">
        Build Mode: {process.env.ENV_MODE}
      </p>
      <App />
    </Provider>
  </React.StrictMode>
);
