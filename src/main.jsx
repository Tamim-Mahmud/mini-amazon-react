import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './Shop/Shop.jsx';
import Order from './Order/Order';
import Home from './Layout/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path:'/',
        element: <Shop />
      },
      {
        path:'/orders',
        element: <Order />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
