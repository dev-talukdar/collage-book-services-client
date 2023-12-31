import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Colleges from "../Pages/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import MyCollege from "../Pages/MyCollege/MyCollege";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
         {
            path: '/',
            element: <Home></Home>,
         },
         {
            path: 'colleges',
            element: <Colleges></Colleges>,
         },
         {
            path: 'admission',
            element: <Admission></Admission>
         },
         {
            path: 'my-college',
            element: <MyCollege></MyCollege>
         }
        ]
    }
]) 