import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import placeholderImg from "../assets/ctf.png";
import { FiMenu, FiX } from "react-icons/fi";

const DasNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Overview", path: "/dashboard" },
    { name: "Blog", path: "/dashboard/blog" },
    { name: "Country", path: "/dashboard/countrypage" },
    { name: "Contact", path: "/dashboard/contact" },
  ];

  return (
    <header className="max-w-screen-2xl bg-white shadow-md sticky top-0 z-50">
      <nav className="px-6 py-2 flex justify-between items-center max-w-[1400px] mx-auto">
        {/* Logo */}
        <Link to="/" className="w-28">
          <img src={logo} alt="Logo" className="w-full object-contain" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-600">
          {navItems.map(({ name, path }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                end={name === "Overview"}
                className={({ isActive }) =>
                  `flex items-center px-3 py-1 rounded-2xl border transition ${
                    isActive
                      ? "text-white bg-black border-black font-semibold"
                      : "border-black text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Profile */}
        <div className="flex items-center gap-4">
          <img
            src={placeholderImg}
            alt="User"
            className="w-10 h-10 rounded-full object-cover border"
          />

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="space-y-3 font-medium text-gray-700">
            {navItems.map(({ name, path }, index) => (
              <li key={index}>
                <NavLink
                  to={path}
                  end={name === "Overview"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-xl border ${
                      isActive
                        ? "text-white bg-black border-black font-semibold"
                        : "border-black hover:bg-gray-100"
                    }`
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default DasNavbar;
