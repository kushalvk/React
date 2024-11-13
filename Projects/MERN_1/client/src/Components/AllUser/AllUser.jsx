import axios from "axios";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const AllUser = () => {

    // fetch all User
    const [users, setusers] = useState()

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/alluser`)
            .then((data) => setusers(data.data))
            .catch((err) => console.log(err))
    })

    // Delete User
    const deleteuser = (id) => {
        axios.delete(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/user/delete/` + id)
            .then(() => {
                alert("User successfully deleted");
                setusers((prevUsers) => prevUsers.filter(user => user.id !== id));
            })
            .catch((err) => alert(`Error to Delete User : ${err}`));
    }

    // update User
    const navigation = useNavigate();
    const updateUser = (id) => {
        navigation(`/adduser?update=${id}`)
    }

    return (

        <div className="mx-1 w-full h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center bg-gray-500 rounded-md flex flex-col lg:mx-36 w-full max-w-5xl">
                <div className="my-5">
                    <h1 className="text-2xl text-white font-bold">All Users</h1>
                </div>
                <hr/>
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 text-white">
                        <thead>
                        <tr className="bg-gray-800">
                            <th className="px-4 py-2 border border-gray-300">Full Name</th>
                            <th className="px-4 py-2 border border-gray-300">Username</th>
                            <th className="px-4 py-2 border border-gray-300">DOB</th>
                            <th className="px-4 py-2 border border-gray-300">Number</th>
                            <th className="px-4 py-2 border border-gray-300">Address</th>
                            <th className="px-4 py-2 border border-gray-300">City</th>
                            <th className="px-4 py-2 border border-gray-300">Role</th>
                            <th className="px-4 py-2 border border-gray-300">Image</th>
                            <th className="px-4 py-2 border border-gray-300">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users ? (
                            users.map((user) => (
                                <tr key={user._id} className="bg-gray-600 hover:bg-gray-700">
                                    <td className="px-4 py-2 border border-gray-300">{user.fname}</td>
                                    <td className="px-4 py-2 border border-gray-300">{user.username}</td>
                                    <td className="px-4 py-2 border border-gray-300">{new Date(user.dob).toLocaleDateString()}</td>
                                    <td className="px-4 py-2 border border-gray-300">{user.number}</td>
                                    <td className="px-4 py-2 border border-gray-300">{user.address}</td>
                                    <td className="px-4 py-2 border border-gray-300">{user.city}</td>
                                    <td className="px-4 py-2 border border-gray-300">{user.role}</td>
                                    <td className="px-4 py-2 border border-gray-300">
                                        <img src={`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/${user.photo}`} alt="Photo"/>
                                    </td>
                                    <td className="px-4 py-2 border border-gray-300">
                                        <button className="bg-green-500 mx-2 px-3 py-1 my-2 rounded-lg w-20"
                                                onClick={() => updateUser(user._id)}>
                                            Update
                                        </button>
                                        <button className="bg-red-500 mx-2 px-3 py-1 my-2 rounded-lg w-20"
                                                onClick={() => deleteuser(user._id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="9" className="text-center py-4 border border-gray-300">Loading....!</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default AllUser;
