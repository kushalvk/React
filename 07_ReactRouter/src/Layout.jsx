import { Outlet } from "react-router-dom"
import Footer from "./camponents/Footer/Footer"
import Header from "./camponents/Header/Header"


function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout