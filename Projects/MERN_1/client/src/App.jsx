import './App.css';
import {Outlet} from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar.jsx";
import {useEffect, useState} from "react";
import {TfiLayoutSlider} from "react-icons/tfi";
import axios from "axios";
import Header from "./Components/Header/Header.jsx";

function App() {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [loggedin, setLoggedin] = useState(null);
    const token = localStorage.getItem("token");

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    useEffect(() => {
        if (token) {
            axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/loggeduser`, {
                headers: {Authorization: `Bearer ${token}`}
            })
                .then((res) => setLoggedin(res.data.user))
                .catch(() => console.log("error logging in"));
        }
    }, [token]);

    return (
        <>
            {loggedin ?
                <>
                    {loggedin.role === "USER" ? <Header /> : null}
                </> : null}
            <div className="w-full h-full flex relative">
                {loggedin ? (
                    <>
                        {loggedin.role === "ADMIN" ? (
                            <>
                                <button onClick={toggleNavbar}
                                        className="top-1 left-1 z-10 bg-gray-900 text-white fixed flex items-center justify-center p-1 w-8 h-8 rounded-md">
                                    <TfiLayoutSlider/>
                                </button>
                                <Navbar isOpen={isNavbarOpen}/>
                            </>
                        ) : null}
                    </>
                ) : null}
                <Outlet/>
            </div>
        </>
    );
}

export default App;
