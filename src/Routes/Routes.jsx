import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import Order from "../Pages/Order";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Secret from "../LayOut/Secret";
import PrivateRoutes from "./PrivateRoutes";
import DashBoard from "../LayOut/DashBoard";
import MyCart from "../Pages/MyCart";
import AllUsers from "../Pages/AllUsers";
import AddItem from "../Pages/AddItem";
import ManageItem from "../Pages/ManageItem";
import AdminRoutes from "./AdminRoutes";
import Payment from "../Pages/Payment";
import UserHome from "../Pages/UserHome";
import AdminHome from "../Pages/AdminHome";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/menu',
          element: <Menu></Menu>
        },
        {
          path: '/order',
          element: <Order></Order>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signUp",
          element: <SignUp></SignUp>
        },
        {
          path: '/secret',
          element: <PrivateRoutes><Secret></Secret></PrivateRoutes>
        }
      ]
    },
    {
      path:'/dashboard',
      element: <PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
      children:[
        {
          path: 'myCart',
          element: <MyCart></MyCart>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path: 'userHome',
          element: <UserHome></UserHome>
        },
        {
          path: 'adminHome',
          element: <AdminRoutes><AdminHome></AdminHome></AdminRoutes>
        },
        {
          path: 'allUsers',
          element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
        },
        {
          path: 'addItem',
          element: <AdminRoutes><AddItem></AddItem></AdminRoutes>
        },
        {
          path: 'manageItem',
          element: <AdminRoutes><ManageItem></ManageItem></AdminRoutes>
        }
      ]
    }
  ]);