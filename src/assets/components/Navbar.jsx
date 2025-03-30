import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-blue-900 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li> <a>About us</a></li>
                            <li><a>What We Do</a></li>
                            <li><a>Contact Us</a></li>
                            <li><a>Carrier</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Brain Pay</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li> <a>About us</a></li>
                        <li><a>What We Do</a></li>
                        <li><a>Contact Us</a></li>
                        <li><a>Carrier</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-4 hidden sm:flex">
                    <a className="hidden md:inline-flex items-center justify-center px-5 py-2 text-base font-medium text-blue-900 border border-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-gray-100 dark:text-white">Login
                    </a>
                    <a className="hidden md:inline-flex bg-blue-800 items-center justify-center px-5 py-2 text-base font-medium text-blue-900 border border-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-gray-100 dark:text-white">Signup
                    </a>
                </div>
            </div>
        </>
    )
}

export default Navbar