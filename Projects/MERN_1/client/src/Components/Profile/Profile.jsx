import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Profile() {
    const [loggedin, setLoggedin] = useState({});
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/loggeduser`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
                .then((res) => setLoggedin(res.data.user))
                .catch(() => console.log("error to logged in"))
        } else {
            navigate("/")
        }

    }, [navigate, token]);

    return (
        <div className="w-full h-screen flex items-center justify-center bg-gray-100">
            <div className="w-[90vw] max-w-2xl bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Profile Details</h2>

                {/* Profile Picture */}
                <div className="flex justify-center mb-6">
                    <img
                        src={`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/${loggedin.photo || 'Profile_Photo.png'}`}
                        alt="Profile"
                        className="w-32 h-32 rounded-full border-2 border-gray-300 object-cover"
                    />
                </div>

                {/* Profile Information */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-gray-600 font-semibold">Full Name:</div>
                    <div className="text-gray-800">{loggedin.fname || "N/A"}</div>

                    <div className="text-gray-600 font-semibold">Username:</div>
                    <div className="text-gray-800">{loggedin.username || "N/A"}</div>

                    <div className="text-gray-600 font-semibold">Date of Birth:</div>
                    <div className="text-gray-800">{new Date(loggedin.dob).toLocaleDateString() || "N/A"}</div>

                    <div className="text-gray-600 font-semibold">Phone Number:</div>
                    <div className="text-gray-800">{loggedin.number || "N/A"}</div>

                    <div className="text-gray-600 font-semibold">Address:</div>
                    <div className="text-gray-800">{loggedin.address || "N/A"}</div>

                    <div className="text-gray-600 font-semibold">City:</div>
                    <div className="text-gray-800">{loggedin.city || "N/A"}</div>

                    <div className="text-gray-600 font-semibold">Role:</div>
                    <div className="text-gray-800">{loggedin.role || "N/A"}</div>
                </div>

                {/* Edit Profile Button */}
                <div className="text-center mt-6">
                    <button
                        className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-200"
                        onClick={() => {/* Redirect to Edit Profile page */}}
                    >
                        Edit Profile
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Profile;
