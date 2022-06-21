import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Store from "./redux/store";
import "./index.css";
import "./i18n";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<div>loading</div>}>
      <Provider store={Store}>
        <App />
      </Provider>
    </Suspense>
  </React.StrictMode>
);
