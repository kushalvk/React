import {useNavigate} from "react-router-dom";
import {FaHome, FaUser} from "react-icons/fa";

function Header() {

    const navigate = useNavigate();

    // logout
    const handlelogout = () => {
        localStorage.removeItem("token");
        navigate("/");
        location.reload();
    }

    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-xl">Logo</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a href="/home" className="flex items-center mr-5 hover:text-gray-900">
                            <FaHome className="mr-2"/> Home
                        </a>
                        <a href="/profile" className="flex items-center mr-5 hover:text-gray-900">
                            <FaUser className="mr-2"/> Profile
                        </a>
                    </nav>
                    <button
                        onClick={handlelogout}
                        className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Logout
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                             strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header;