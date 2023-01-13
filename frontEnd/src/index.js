import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Redirect from "./components/Redirect";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HistoryContext } from "./components/HIstoryContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:id",
    element: <Redirect />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <HistoryContext>
    <RouterProvider router={router} />
  </HistoryContext>
);
