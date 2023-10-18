import {
  createBrowserRouter
} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
       path:'/',
       element:<Home></Home>
      },
      {
        path:'/addproduct',
        element:<AddProduct></AddProduct>
      },
      {
        path:'/updateproduct',
        element:<UpdateProduct></UpdateProduct>
      },
      {
        path:'/mycart',
        element:<MyCart></MyCart>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
]);

export default router;