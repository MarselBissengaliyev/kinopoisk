// fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// React
import React from "react";
import ReactDOM from "react-dom/client";

// React router dom
import router from "./router/Router";
import { RouterProvider } from "react-router-dom";

// styles
import "./assets/styles/style.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
