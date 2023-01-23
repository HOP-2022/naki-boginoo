import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Redirect from "./components/Redirect";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HistoryContext } from "./components/HIstoryContext";
import App from "./pages/App";
import AppSignIn from "./pages/AppSignIn";
import AppSignUp from "./pages/AppSignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:id",
    element: <Redirect />,
  },
  {
    path: "/signin",
    element: <AppSignIn />,
  },
  {
    path: "/signup",
    element: <AppSignUp />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HistoryContext>
    <RouterProvider router={router} />
  </HistoryContext>
);
