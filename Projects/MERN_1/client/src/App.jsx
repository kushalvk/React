import './App.css'
import {Outlet} from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar.jsx";
import {useState} from "react";
import {TfiLayoutSlider} from "react-icons/tfi";

function App() {
    const [isNavbarOpen, setIsNavbarOpen] = useState(true);

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    }

    return (
        <>
            <div className="w-full h-full flex relative">
                <button onClick={toggleNavbar}
                        className={"absolute top-1 left-1 z-10 bg-gray-900 text-white flex items-center justify-center p-1 w-8 h-8 rounded-md"}><TfiLayoutSlider />
                </button>
                <Navbar isOpen={isNavbarOpen} />
                <Outlet/>
            </div>
        </>
    )
}

export default App
