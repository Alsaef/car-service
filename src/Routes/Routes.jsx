import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import ChackOut from "../Pages/ChackOut/ChackOut";
import Bookings from "../Pages/Bookings/Bookings";
import Private from "../Private/Private";
import Error from "../Pages/Error/Error";

const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut></LayOut>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
          },
        {
            path: '/login',
            element: <Login></Login>,
          },
        {
            path: '/singup',
            element: <SingUp></SingUp>,
          },
        {
            path: '/chackout/:id',
            element: <Private><ChackOut></ChackOut></Private>,
            loader:({params})=>fetch(`http://localhost:3000/services/${params.id}`)
          },
          {
            path:"/bookings",
            element:<Private><Bookings></Bookings></Private>

          },
          {
            path:'*',
            element:<Error></Error>
          }
      ]
    },
  ]);

  export default router;