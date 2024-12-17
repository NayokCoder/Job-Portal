import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const { user, signOutUser } = useContext;
  const handleLogout = () => {
    signOutUser()
      .then(() => {
        console.log("User logged out successfully.");
      })
      .catch((error) => {
        alert(`Error: ${error.message}`);
      });
  };

  const Links = (
    <>
      {" "}
      <li>
        <Link to={"/home"}>Home</Link>
      </li>
      <li>
        <a>Parent</a>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 max-w-[1440px] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {Links}
          </ul>
        </div>
        <a className=" text-gray-500 font-bold text-xl">JB-PORTAL</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center space-x-4">
            {/* Profile Photo */}
            {user.photoURL ? <img src={user.photoURL} alt="Profile" className="w-10 h-10 rounded-full border-2 border-indigo-500" /> : <FaUserCircle className="w-10 h-10 text-gray-600" />}

            {/* Logout Button */}
            <button onClick={handleLogout} className="px-4 py-2 text-sm font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none transition duration-300">
              Logout
            </button>
          </div>
        ) : (
          // Show Login and Register Buttons if Not Logged In
          <div className="flex items-center space-x-4">
            <NavLink to="/login" className={({ isActive }) => `px-4 py-2 text-sm font-medium rounded-md transition duration-300 ${isActive ? "bg-indigo-500 text-white" : "bg-slate-200 text-gray-500 hover:bg-indigo-600 hover:text-white"}`}>
              Login
            </NavLink>

            <NavLink to="/signup" className={({ isActive }) => `px-4 py-2 text-sm font-medium rounded-md transition duration-300 ${isActive ? "bg-indigo-500 text-white" : "bg-slate-200 text-gray-500 hover:bg-indigo-600 hover:text-white"}`}>
              Sign Up
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
