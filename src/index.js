import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Error from './components/Error';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Applayout = ()=>{
  return(
    <>
    <Header/>
    <Outlet />
    <Footer/>
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <App/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      }
    ]
  }
]);

root.render(<RouterProvider router={appRouter}/>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
