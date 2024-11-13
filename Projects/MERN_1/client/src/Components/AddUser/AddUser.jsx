import axios from "axios";
import {useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";

function AddUser() {
    const [form, setForm] = useState({
        username: "",
        fname: "",
        Password: "",
        dob: "",
        number: "",
        address: "",
        city: "",
        photo: null,
        role: "USER",
    });
    const navigation = useNavigate();
    console.log(form.photo)

    const handleSubmit = (e) => {
        e.preventDefault();

        // data stored in one form
        const formData = new FormData();
        formData.append("photo", form.photo);
        formData.append("username", form.username);
        formData.append("fname", form.fname);
        formData.append("Password", form.Password);
        formData.append("dob", form.dob);
        formData.append("number", form.number);
        formData.append("address", form.address);
        formData.append("city", form.city);
        formData.append("role", form.role);

        if (id) {
            axios
                .put(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/user/update/done/${id}`, formData)
                .then((res) => {
                    alert(`User Successfully Updated with Username: ${res.data.username}`);
                    navigation("/alluser");
                })
                .catch(() => alert("Enter valid data"));
        } else {
            axios
                .post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/adduser`, formData)
                .then((res) => {
                    alert(`User Successfully added with Username: ${res.data.username}`);
                    navigation("/alluser");
                })
                .catch(() => alert("Enter valid data"));
        }
    };


    // update user
    const [searchParam] = useSearchParams();
    const id = searchParam.get("update");
    useEffect(() => {
        if (id) {
            axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/user/update/${id}`)
                .then((res) => setForm(res.data))
                .catch((err) => alert(`Error to load User : ${err}`))
        }
    }, [id]);

    // upload file
    const handleFileChange = (e) => {
        setForm({...form, photo: e.target.files[0]});
    }

    return (
        <>
            <div className="mx-1 w-full h-screen flex items-center justify-center bg-gray-100">
                <form onSubmit={handleSubmit} method="POST">
                    <div className="text-center bg-gray-500 rounded-md flex flex-col lg:mx-36 my-40">
                        <div>
                            {id ? <h1 className="text-white text-center font-bold text-3xl my-4">
                                Update User
                            </h1> : <h1 className="text-white text-center font-bold text-3xl my-4">
                                Add User
                            </h1>}

                        </div>
                        <hr/>
                        <div>
                            <div
                                className="my-5 text-center h-full w-full flex items-center justify-center mx-4"></div>
                            <div className="my-5 text-center grid grid-cols-2 mx-4">
                                <label className="text-white" htmlFor="username">
                                    Full Name :{" "}
                                </label>
                                <input
                                    type="text"
                                    name="fname"
                                    value={form.fname}
                                    className="bg-black rounded-md border-2 border-white text-white"
                                    onChange={(e) =>
                                        setForm((prevdata) => ({
                                            ...prevdata,
                                            fname: e.target.value,
                                        }))
                                    }
                                    required
                                />
                            </div>
                            <div className="my-5 text-center grid grid-cols-2 mx-4">
                                <label className="text-white" htmlFor="username">
                                    Username :{" "}
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    value={form.username}
                                    className="bg-black rounded-md border-2 border-white text-white"
                                    onChange={(e) =>
                                        setForm((prevdata) => ({
                                            ...prevdata,
                                            username: e.target.value,
                                        }))
                                    }
                                    required
                                />
                            </div>
                            <div className="my-5 text-center grid grid-cols-2 mx-4">
                                <label className="text-white" htmlFor="name">
                                    Password :{" "}
                                </label>
                                <input
                                    type="password"
                                    name="name"
                                    value={form.Password}
                                    className="bg-black rounded-md border-2 border-white text-white"
                                    onChange={(e) =>
                                        setForm((prevdata) => ({
                                            ...prevdata,
                                            Password: e.target.value,
                                        }))
                                    }
                                    required
                                />
                            </div>
                            <div className="my-5 text-center grid grid-cols-2 mx-4">
                                <label className="text-white" htmlFor="name">
                                    DOB :{" "}
                                </label>
                                <input
                                    type="date"
                                    value={form.dob ? new Date(form.dob).toISOString().split("T")[0] : ""}
                                    className="bg-black rounded-md border-2 border-white text-white"
                                    onChange={(e) =>
                                        setForm((prevdata) => ({
                                            ...prevdata,
                                            dob: e.target.value,
                                        }))
                                    }
                                    required
                                />
                            </div>
                            <div className="my-5 text-center grid grid-cols-2 mx-4">
                                <label className="text-white" htmlFor="name">
                                    Number :{" "}
                                </label>
                                <input
                                    type="number"
                                    value={form.number}
                                    className="bg-black rounded-md border-2 border-white text-white"
                                    onChange={(e) =>
                                        setForm((prevdata) => ({
                                            ...prevdata,
                                            number: e.target.value,
                                        }))
                                    }
                                    required
                                />
                            </div>
                            <div className="my-5 text-center grid grid-cols-2 mx-4">
                                <label className="text-white" htmlFor="name">
                                    Address :{" "}
                                </label>
                                <input
                                    type="text"
                                    value={form.address}
                                    className="bg-black rounded-md border-2 border-white text-white"
                                    onChange={(e) =>
                                        setForm((prevdata) => ({
                                            ...prevdata,
                                            address: e.target.value,
                                        }))
                                    }
                                    required
                                />
                            </div>
                            <div className="my-5 text-center grid grid-cols-2 mx-4">
                                <label className="text-white" htmlFor="name">
                                    City :{" "}
                                </label>
                                <input
                                    type="text"
                                    value={form.city}
                                    className="bg-black rounded-md border-2 border-white text-white"
                                    onChange={(e) =>
                                        setForm((prevdata) => ({
                                            ...prevdata,
                                            city: e.target.value,
                                        }))
                                    }
                                    required
                                />
                            </div>
                            <div className="my-5 text-center grid grid-cols-2 mx-4">
                                <label className="text-white" htmlFor="name">
                                    Photo :{" "}
                                </label>
                                <input type="file" name="photo"
                                       className="bg-black rounded-md border-2 border-white text-white"
                                       onChange={handleFileChange} accept="image/*" required/>
                            </div>
                            <div className="my-5 text-center grid grid-cols-2 mx-4">
                                <label className="text-white" htmlFor="name">
                                    Role :{" "}
                                </label>
                                <select
                                    name="role"
                                    value={form.role}
                                    className="bg-black rounded-md border-2 border-white text-white"
                                    onChange={(e) =>
                                        setForm((prevdata) => ({
                                            ...prevdata,
                                            role: e.target.value,
                                        }))
                                    }
                                    required
                                >
                                    <option value="USER">USER</option>
                                    <option value="ADMIN">ADMIN</option>
                                </select>
                            </div>

                            <div className="">
                                <button
                                    type="submit"
                                    className="border-2 border-white text-white my-4 bg-blue-500 h-8 w-32 rounded-md"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddUser;
