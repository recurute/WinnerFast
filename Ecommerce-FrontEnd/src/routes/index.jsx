import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import ContactUs from "../Pages/Contactus";
import DefaultLayout from "../Pages/Layouts/DafaultLayout";

const router= createBrowserRouter([
{
    path:'/',
    element: <DefaultLayout/>,
    children:[
        {
        path: '/',
        element: <Home/>
        },
        {
            path: '/contactus',
            element: <ContactUs/>
        }
    ] 
}
])
export default router