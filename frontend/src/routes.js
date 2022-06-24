import React from 'react';
import  { Navigate }  from 'react-router-dom';
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Sign-up";
import Menu from "./pages/Menu";
import Support from "./pages/Support";
import CustomerMenu from "./pages/customer/CustomerMenu";
import Ordini from "./pages/customer/CustomerOrders";
import CustomerSupport from "./pages/customer/CustomerSupport";

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
      { path: 'menu', element: <Navigate to="/pages/Menu" />},
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
  {
    path: '/menu',
    element: <Menu />,
    children: [
      { path: '', element: <Navigate to="/pages/Home"/>},
      { path: 'login', element: <Navigate to="/pages/Login" /> },
      { path: 'signup', element: <Navigate to="/pages/Sign-up"/>},
      ]
  },
  {
    path: '/support',
    element: <Support />,
    children: [
      { path: '', element: <Navigate to="/pages/Home"/>},
      { path: 'login', element: <Navigate to="/pages/Login" /> },
      { path: 'signup', element: <Navigate to="/pages/Sign-up"/>},
    ]
  },
  {
    path: 'customer/menu',
    element: <CustomerMenu />,
    children: [
      { path: 'customer/menu', element: <Navigate to="/pages/customer/CustomerMenu"/>},
      { path: 'customer/cart', element: <Navigate to="/pages/customer/Cart"/>},
      { path: 'customer/support', element: <Navigate to="/pages/customer/CustomerSupport"/>},
    ]
  },
  {
    path: 'customer/ordini',
    element: <Ordini />,
    children: [
      { path: 'customer/menu', element: <Navigate to="/pages/customer/CustomerMenu"/>},
      { path: 'customer/ordini', element: <Navigate to="/pages/customer/Cart"/>},
      { path: 'customer/support', element: <Navigate to="/pages/customer/CustomerSupport"/>},
    ]
  },
  {
    path: 'customer/support',
    element: <CustomerSupport />,
    children: [
      { path: 'customer/menu', element: <Navigate to="/pages/customer/CustomerMenu"/>},
      { path: 'customer/ordini', element: <Navigate to="/pages/customer/Cart"/>},
      { path: 'customer/support', element: <Navigate to="/pages/customer/CustomerSupport"/>},
    ]
  },
  { path: '*', element: <Navigate to="/404" /> }];

export default routes;

