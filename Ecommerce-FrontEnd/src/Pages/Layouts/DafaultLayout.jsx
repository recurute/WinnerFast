import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
export default function DefaultLayout(){
    return(
        <>
        <main>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </main>
        </>
    )
}