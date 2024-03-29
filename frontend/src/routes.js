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
import CookSupport from "./pages/cook/CookSupport";
import Orders from "./pages/cook/Orders"
import AdminHome from "./pages/admin/AdminHome";
import AdminUserHandle from "./pages/admin/AdminUserHandle";
import AdminSupport from "./pages/admin/AdminSupport";
import AdminMenu from "./pages/admin/AdminMenu";

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
  {
    path : 'cook/support',
    element : <CookSupport />,
    children : [
      {path : 'cook/orders' , element: <Navigate to= "/pages/cook/Orders"/>},
      {path : 'cook/support' , element: <Navigate to= "/pages/cook/CookSupport"/>},

    ]
  },
  {
    path : 'cook/orders',
    element : <Orders />,
    children : [
      {path : 'cook/orders' , element: <Navigate to= "/pages/cook/Orders"/>},
      {path : 'cook/support' , element: <Navigate to= "/pages/cook/CookSupport"/>}
    ]
  },
  {
    path: 'admin/home',
    element: <AdminHome />,
    children: [
      { path: 'admin/home', element: <Navigate to="/pages/admin/AdminHome"/>},
      { path: 'admin/menu', element: <Navigate to="/pages/admin/AdminMenu" /> },
      { path : 'admin/support' , element: <Navigate to= "/pages/admin/AdminSupport"/>},
      { path : 'admin/userHandle' , element: <Navigate to= "/pages/admin/AdminUserHandle"/>}
    ]
  },
  {
    path :'admin/menu',
    element: <AdminMenu/>,
    children : [
      { path: 'admin/home', element: <Navigate to="/pages/admin/AdminHome"/>},
      { path: 'admin/menu', element: <Navigate to="/pages/admin/AdminMenu" /> },
      { path : 'admin/support' , element: <Navigate to= "/pages/admin/AdminSupport"/>},
      { path : 'admin/userHandle' , element: <Navigate to= "/pages/admin/AdminUserHandle"/>}
    ]
  },
  {
    path :'admin/support',
    element: <AdminSupport/>,
    children : [
      { path: 'admin/home', element: <Navigate to="/pages/admin/AdminHome"/>},
      { path: 'admin/menu', element: <Navigate to="/pages/admin/AdminMenu" /> },
      { path : 'admin/support' , element: <Navigate to= "/pages/admin/AdminSupport"/>},
      { path : 'admin/userHandle' , element: <Navigate to= "/pages/admin/AdminUserHandle"/>}
      ]
  },
  {
    path :'admin/userHandle',
    element: <AdminUserHandle/>,
    children : [
      { path: 'admin/home', element: <Navigate to="/pages/admin/AdminHome"/>},
      { path: 'admin/menu', element: <Navigate to="/pages/admin/AdminMenu" /> },
      { path : 'admin/support' , element: <Navigate to= "/pages/admin/AdminSupport"/>},
      { path : 'admin/userHandle' , element: <Navigate to= "/pages/admin/AdminUserHandle"/>}
      ]
  },
  { path: '*', element: <Navigate to="/404" /> }];

export default routes;

