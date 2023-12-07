import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { Header } from './component/Header';
import { Footer } from './component/Footer';
import { UnderConstructionPage } from './component/UnderConstructionPage';

const Layout = () => {
  return (
    <div className='mx-auto'>
      <Header />
      <div className='flex flex-col justify-center items-center'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/category/:id",
        element: <UnderConstructionPage />,
      },
      {
        path: "/product/:id",
        element: <UnderConstructionPage />
      },
    ]
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
