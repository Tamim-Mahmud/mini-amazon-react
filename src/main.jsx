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
import Login from "./components/Login.jsx";
import ReviewItem from "./components/ReviewItem/ReviewItem.jsx";
import Register from "./components/Register.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import PrivateRoute from "./private route/PrivateRoute.jsx";

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
        path: "/checkout",
        element: <PrivateRoute> <Checkout /> </PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
