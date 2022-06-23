import React from 'react';
import  { Navigate }  from 'react-router-dom';
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Sign-up"

const routes = [{
  path: '/login',
  element: <Login />,
  children: [
    { path: '', element: <Navigate to="/pages/Home"/>},
    { path: 'login', element: <Navigate to="/pages/Login" /> },
    { path: 'signup', element: <Navigate to="/pages/Sign-up"/>},
  ]
},
  {
    path: '',
    element: <Home />,
    children: [
      { path: '', element: <Navigate to="/pages/Home"/>},
      { path: 'login', element: <Navigate to="/pages/Login" /> },
      { path: 'signup', element: <Navigate to="/pages/Sign-up"/>},
    ]
  },
  {
    path: '/signup',
    element: <Signup />,
    children: [
      { path: '', element: <Navigate to="/pages/Home"/>},
      { path: 'login', element: <Navigate to="/pages/Login" /> },
      { path: 'signup', element: <Navigate to="/pages/Sign-up"/>},
    ]
  },
  { path: '*', element: <Navigate to="/404" /> }];

export default routes;

