import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";


import { router } from "./router/Router";
import FriendsProvider from "./context/FriendsProvider";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FriendsProvider>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" />
    </FriendsProvider>
  </StrictMode>,
);
