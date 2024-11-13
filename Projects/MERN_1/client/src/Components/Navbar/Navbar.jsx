import {FaHome, FaUserPlus, FaUsers, FaUser} from 'react-icons/fa';
import {useEffect, useState} from "react";
import axios from "axios";
import {SlLogout} from "react-icons/sl";
import {useNavigate} from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Navbar({isOpen}) {

    const [loggedin, setLoggedin] = useState(null);
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (token) {
            axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/loggeduser`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
                .then((res) => setLoggedin(res.data.user))
                .catch(() => console.log("error to logged in"))
        }
    }, [token]);

    // logout
    const handlelogout = () => {
        localStorage.removeItem("token");
        navigate("/");
        location.reload();
    }

    return (<div
        className={`bg-gray-500 ${isOpen ? 'w-[20vw]' : 'w-[5vw]'} h-screen flex flex-col pl-10 gap-4 pt-7 text-white text-center transition-all duration-300`}
    >
        {isOpen ? (<>
            <a href="/dashbored" className="flex items-center mt-10 gap-2">
                <FaHome/> Dashbored
            </a>
            <a href="/adduser" className="flex items-center gap-2">
                <FaUserPlus/> Add User
            </a>
            <a href="/alluser" className="flex items-center gap-2">
                <FaUsers/> All User
            </a>
            {loggedin ? <>
                <a href="/profile" className="flex items-center gap-2">
                    <FaUser/> Profile
                </a>
                <div className="mt-auto mb-4">
                    <a onClick={handlelogout} className="flex items-center gap-2 cursor-pointer">
                        <SlLogout/> Logout
                    </a>
                </div>
            </> : null}

        </>) : (<>
            <a href="/dashbored" className="mt-10 -ml-10 flex justify-center">
                <FaHome/>
            </a>
            <a href="/adduser" className="flex -ml-10 justify-center">
                <FaUserPlus/>
            </a>
            <a href="/alluser" className="flex -ml-10 justify-center">
                <FaUsers/>
            </a>
            {loggedin ? <>
                    <a href="/profile" className="flex -ml-10 justify-center">
                        <FaUser/>
                    </a>
                    <div className="mt-auto mb-4">
                    <a href="/alluser" onClick={handlelogout} className="flex -ml-10 justify-center cursor-pointer">
                        <SlLogout/>
                    </a>
                    </div>
                </>
                : null}
        </>)}
    </div>);
}

export default Navbar;
