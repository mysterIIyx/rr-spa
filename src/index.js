import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';
import Product from './components/Product';
import Contact from './components/Contact';
import AdminPanel from './components/AdminPanel';
import LoginPage from './components/LoginPage';
import ErrorPage from './components/ErrorPage';
import reportWebVitals from './reportWebVitals';
import ProductItem from './components/ProductItem';
import 'bootstrap/dist/css/bootstrap.min.css'

// Define your routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // These are nested routes that will be rendered inside the <Outlet> in App.js
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "product/:id",
        element: <ProductItem />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "admin",
        element: <AdminPanel />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
], {
    // Dodanie basename
    basename: "/rr-spa/",
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();