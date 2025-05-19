import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdExpandMore,
  MdExpandLess,
} from "react-icons/md";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { RiCustomerServiceFill } from "react-icons/ri";
import { FaSignInAlt } from "react-icons/fa";

const baseClass = "flex items-center px-4 py-2 rounded-md hover:bg-gray-100 transition";
const activeClass = "bg-green-100 text-green-600 font-semibold";

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState("");

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? "" : menu);
  };

  return (
    <div id="sidebar" className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg">
      {/* Logo Section */}
      <div id="sidebar-logo" className="flex flex-col">
        <span id="logo-title" className="font-poppins font-extrabold text-4xl">
          Sedap <b id="logo-dot" className="text-green-500">.</b>
        </span>
        <span id="logo-subtitle" className="font-semibold text-gray-400">
          Modern Admin Dashboard
        </span>
      </div>

      {/* Sidebar Menu */}
      <div id="sidebar-menu" className="mt-10">
        <ul id="menu-list" className="space-y-3">
          {/* Dashboard */}
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${baseClass} ${isActive ? activeClass : ""}`
              }
              aria-label="Navigate to Dashboard"
            >
              <MdDashboard className="mr-4 text-xl" />
              Dashboard
            </NavLink>
          </li>

          {/* Expandable Menu: Transaksi */}
          <li>
            <button
              onClick={() => toggleMenu("transaksi")}
              className={`${baseClass} w-full flex justify-between items-center`}
            >
              <span className="flex items-center">
                <AiOutlineUnorderedList className="mr-4 text-xl" />
                Transaksi
              </span>
              {openMenu === "transaksi" ? <MdExpandLess /> : <MdExpandMore />}
            </button>
            {openMenu === "transaksi" && (
              <ul className="pl-10 mt-2 space-y-2 text-gray-600 text-sm">
                <li>
                  <NavLink to="/order" className={({ isActive }) => `${isActive ? activeClass : ""} block py-1 hover:text-green-600`}>
                    Daftar Order
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/invoice" className={({ isActive }) => `${isActive ? activeClass : ""} block py-1 hover:text-green-600`}>
                    Invoice
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Expandable Menu: Manajemen */}
          <li>
            <button
              onClick={() => toggleMenu("manajemen")}
              className={`${baseClass} w-full flex justify-between items-center`}
            >
              <span className="flex items-center">
                <RiCustomerServiceFill className="mr-4 text-xl" />
                Manajemen
              </span>
              {openMenu === "manajemen" ? <MdExpandLess /> : <MdExpandMore />}
            </button>
            {openMenu === "manajemen" && (
              <ul className="pl-10 mt-2 space-y-2 text-gray-600 text-sm">
                <li>
                  <NavLink to="/customer" className={({ isActive }) => `${isActive ? activeClass : ""} block py-1 hover:text-green-600`}>
                    Pelanggan
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/produk" className={({ isActive }) => `${isActive ? activeClass : ""} block py-1 hover:text-green-600`}>
                    Produk
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Page MMZ */}
          <li>
            <NavLink
              to="/pagemmz"
              end
              className={({ isActive }) =>
                `${baseClass} ${isActive ? activeClass : ""}`
              }
              aria-label="Navigate to Page MMZ"
            >
              <FaSignInAlt className="mr-4 text-xl" />
              Page MMZ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/page04"
              end
              className={({ isActive }) =>
                `${baseClass} ${isActive ? activeClass : ""}`
              }
              aria-label="Navigate to Page MMZ"
            >
              <FaSignInAlt className="mr-4 text-xl" />
              Page 04
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/page27"
              end
              className={({ isActive }) =>
                `${baseClass} ${isActive ? activeClass : ""}`
              }
              aria-label="Navigate to Page MMZ"
            >
              <FaSignInAlt className="mr-4 text-xl" />
              Page 27
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/page29"
              end
              className={({ isActive }) =>
                `${baseClass} ${isActive ? activeClass : ""}`
              }
              aria-label="Navigate to Page 29"
            >
              <FaSignInAlt className="mr-4 text-xl" />
              Page 29
            </NavLink>
          </li>

          

          {/* Login */}
          <li>
            <NavLink
              to="/login"
              end
              className={({ isActive }) =>
                `${baseClass} ${isActive ? activeClass : ""}`
              }
              aria-label="Navigate to Login"
            >
              <FaSignInAlt className="mr-4 text-xl" />
              Login
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div id="sidebar-footer" className="mt-auto">
        <div
          id="footer-card"
          className="flex items-center px-4 py-2 rounded-md shadow-lg mb-10 bg-green-500"
        >
          <div id="footer-text" className="text-white text-sm">
            <span>Please organize your menus through the button below!</span>
            <div
              id="add-menu-button"
              className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2 cursor-pointer"
              onClick={() => alert("Add Menus clicked!")}
            >
              <span className="text-gray-600 flex items-center">Add Menus</span>
            </div>
          </div>
          <img
            id="footer-avatar"
            src="https://avatar.iran.liara.run/public/28"
            className="w-20 rounded-full ml-auto"
            alt="Footer Avatar"
          />
        </div>
        <span id="footer-brand" className="block font-semibold text-gray-600">
          Sedap Restaurant Admin Dashboard
        </span>
        <p id="footer-copyright" className="font-light text-gray-400">
          &copy; 2025 All Rights Reserved
        </p>
      </div>
    </div>
  );
}
