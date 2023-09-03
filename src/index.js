import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar2 from './Pages/Navbar2';
import TakeAway from './Pages/TakeAway';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Faq from './Pages/Faq';





import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },

  {
    path: "/blog",
    element: <Navbar2/>
  },
 
 
 

  {
    path: "/menu",
    element: <TakeAway/>
  
  },

  {
    path: "/us",
    element: <Contact/>
  
  },

  {
    path: "/login",
    element: <Login/>
  
  },

  {
    path: "/faq",
    element: <Faq/>
  
  },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
