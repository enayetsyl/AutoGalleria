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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
       path:'/',
       element:<Home></Home>,
       loader:() => fetch('http://localhost:5000/cars')
      },
      {
        path:'/addproduct',
        element:<AddProduct></AddProduct>
      },
      {
        path: '/updateproduct/:id',
        element: <UpdateProduct></UpdateProduct>,
        loader:  ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
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
      },
      {
        path:"/productdetails",
        element:<ProductDetails></ProductDetails>,
        loader: async ({ params }) => fetch(`http://localhost:5000/products/${params.name}`)
      }
    ]
  },
]);

export default router;