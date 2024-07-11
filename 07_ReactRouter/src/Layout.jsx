import { Outlet } from "react-router-dom"
import Footer from "./camponents/Footer/Footer"
import Header from "./camponents/Header/Header"

// Header and Footeris fixed "<Outlet />" content ate change that is metion in main.jsx
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