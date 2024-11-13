import React from "react";

function Dashbored() {

    return (
        <div
            className="min-h-screen bg-gradient-to-r from-gray-400 to-gray-900 text-white p-8 w-full h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-4xl mx-auto text-center space-y-10">
                {/* Welcome Section */}
                <section className="mt-12">
                    <h1 className="text-4xl font-bold mb-4">Welcome to the Admin Dashboard</h1>
                    <p className="text-lg">
                        Manage users, view statistics, and access various features from one place.
                    </p>
                </section>

                {/* Quick Access Links */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    <a href="/adduser"
                       className="bg-white bg-opacity-10 hover:bg-opacity-20 p-6 rounded-lg shadow-md transition">
                        <h2 className="text-xl font-semibold mb-2">Add New User</h2>
                        <p>Create and manage user profiles effortlessly.</p>
                    </a>
                    <a href="/alluser"
                       className="bg-white bg-opacity-10 hover:bg-opacity-20 p-6 rounded-lg shadow-md transition">
                        <h2 className="text-xl font-semibold mb-2">View All Users</h2>
                        <p>Browse through all registered users in the system.</p>
                    </a>
                    <a href="/profile"
                       className="bg-white bg-opacity-10 hover:bg-opacity-20 p-6 rounded-lg shadow-md transition">
                        <h2 className="text-xl font-semibold mb-2">Your Profile</h2>
                        <p>Update your information and manage your profile.</p>
                    </a>
                    <a href="/dashbored"
                       className="bg-white bg-opacity-10 hover:bg-opacity-20 p-6 rounded-lg shadow-md transition">
                        <h2 className="text-xl font-semibold mb-2">Dashboard</h2>
                        <p>Access various administrative tools and insights.</p>
                    </a>
                </section>

                {/* Statistics Section */}
                <section className="mt-16">
                    <h2 className="text-3xl font-bold mb-6">Quick Stats</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-2xl font-semibold">Users</h3>
                            <p className="text-3xl font-bold mt-2">120</p>
                        </div>
                        <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-2xl font-semibold">Active Sessions</h3>
                            <p className="text-3xl font-bold mt-2">50</p>
                        </div>
                        <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-2xl font-semibold">Tasks Completed</h3>
                            <p className="text-3xl font-bold mt-2">30</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Dashbored
