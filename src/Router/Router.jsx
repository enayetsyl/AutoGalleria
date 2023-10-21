import {
  createBrowserRouter
} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import CarDetails from "../Pages/CarDetails/CarDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
       path:'/',
       element:<Home></Home>,
       loader:() => fetch(`https://brand-shop-server-two-tau.vercel.app/cars`)
      },
      {
        path:'/addproduct',
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: '/updateproduct/:id',
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader:  ({ params }) => fetch(`https://brand-shop-server-two-tau.vercel.app/product/${params.id}`)
        },
        {
          path: '/cardetails/:id',
          element:<PrivateRoute><CarDetails></CarDetails></PrivateRoute>,
          loader: ({ params }) => fetch(`https://brand-shop-server-two-tau.vercel.app/product/${params.id}`)
        },
      {
        path:'/mycart',
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:"/productdetails/:name",
        element:<ProductDetails></ProductDetails>,
        loader: async ({ params }) => fetch(`https://brand-shop-server-two-tau.vercel.app/products/${params.name}`)
      }
    ]
  },
]);

export default router;