import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Login() {
    const [form, setForm] = useState({
        username: "",
        Password: "",
        role: "USER",
    });
    const navigat = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/login`, {form})
            .then((res) => {
                if (res.data === "Data not Found") {
                    alert("User not found");
                } else {
                    if (res.data.user.role === "ADMIN") {
                        navigat("/dashbored");
                        localStorage.setItem("token", res.data.token);
                        location.reload();
                    } else {
                        navigat("/home");
                        localStorage.setItem("token", res.data.token);
                        location.reload();
                    }

                }
            })
            .catch(() => alert("enter a valid data"));
    };

    return (
        <>
            <form onSubmit={handleSubmit} method="POST"
                  className="mx-1 w-full h-screen flex items-center justify-center bg-gray-100">
                <div className="text-center bg-gray-500 rounded-md lg:mx-96 md:mx-20">
                    <div>
                        <h1 className="text-white text-center font-bold text-3xl my-4">
                            Login
                        </h1>
                    </div>
                    <hr/>
                    <div>
                        <div className="my-5 text-center h-full w-full flex items-center justify-center mx-4">
                            <label className="text-white col-span-2" htmlFor="username">
                                Role :{" "}
                            </label>
                            <div className="col-span-1">
                                <input
                                    type="radio"
                                    name="role"
                                    value="USER"
                                    className="mx-7"
                                    checked={form.role === "USER"}
                                    onChange={(e) =>
                                        setForm((prevdata) => ({
                                            ...prevdata,
                                            role: e.target.value,
                                        }))
                                    }
                                />
                                USER
                                <input
                                    type="radio"
                                    name="role"
                                    value="ADMIN"
                                    className="mx-7"
                                    checked={form.role === "ADMIN"}
                                    onChange={(e) =>
                                        setForm((prevdata) => ({
                                            ...prevdata,
                                            role: e.target.value,
                                        }))
                                    }
                                />
                                ADMIN
                            </div>
                        </div>
                        <div className="my-5 text-center grid grid-cols-2 mx-4">
                            <label className="text-white" htmlFor="username">
                                Username :{" "}
                            </label>
                            <input
                                type="text"
                                name="username"
                                className="bg-black rounded-md border-2 border-white text-white"
                                onChange={(e) =>
                                    setForm((prevdata) => ({
                                        ...prevdata,
                                        username: e.target.value,
                                    }))
                                }
                            />
                        </div>
                        <div className="my-5 text-center grid grid-cols-2 mx-4">
                            <label className="text-white" htmlFor="name">
                                Password :{" "}
                            </label>
                            <input
                                type="password"
                                name="name"
                                className="bg-black rounded-md border-2 border-white text-white"
                                onChange={(e) =>
                                    setForm((prevdata) => ({
                                        ...prevdata,
                                        Password: e.target.value,
                                    }))
                                }
                            />
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
        </>
    );
}

export default Login;
