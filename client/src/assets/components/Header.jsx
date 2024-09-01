import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-orange-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-500">TheAsk</span>
          <span className="text-slate-500">Estate</span>
        </h1>
        <form className="bg-orange-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64 "
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-6">
          <Link to="/">
            <li className="hover:underline">Home</li>
          </Link>
          <Link to="/about">
            <li className="hover:underline">About</li>
          </Link>
          <Link to="/sign-in">
            <li className="hover:underline">Sign-in</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
