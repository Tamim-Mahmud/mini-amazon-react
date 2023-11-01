// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./Shop/Shop.jsx";
import Order from "./Order/Order";
import Home from "./Layout/Home";
import cartProductLoaderData from "./Loaders/cartProductLoader";
import Checkout from "./Checkout/Checkout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/orders",
        element: <Order />,
        loader: cartProductLoaderData,
      },
      {
        path: '/checkout',
        element: <Checkout />,

      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
