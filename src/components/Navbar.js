import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 px-12 shadow-lg py-4 fixed z-50 mb-12">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href="/">Home</a></li>
                            <li><a href="/#about">About</a></li>
                            <li><a href="/#property">Property</a></li>
                            <li><a href="/#agent">Agent</a></li>
                            <li><a href="/#contact">Contact</a></li>
                        </ul>
                    </div>
                    <a href="/" className="btn btn-ghost normal-case text-xl font-bold">RENT A <span className='text-violet-700 ml-2'>PROPERTY</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 font-semibold uppercase">
                        <li><a href="/">Home</a></li>
                        <li><a href="/#about">About</a></li>
                        <li><a href="/#property">Property</a></li>
                        <li><a href="/#agent">Agent</a></li>
                        <li><a href="/#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-outline text-violet-700 font-bold">Login / Register</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;