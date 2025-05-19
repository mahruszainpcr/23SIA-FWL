import {FaHome, FaUsers, FaBox, FaSignOutAlt, FaSign, FaSignInAlt} from "react-icons/fa"
import {NavLink} from "react-router-dom"

export default function Sidebar() {
    const baseClass = "flex items-center space-x-3 p-3 rounded-md"
    const activeClass = "bg-gray-700 font-semibold"

    return (
        <div className="w-64 bg-gray-800 text-white h-screen p-5 flex flex-col">
            <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
            <nav className="flex-1/4">
                <ul>
                    <li className="flex items-center space-x-3 p-3 hover:bg-gray-700 rounded-md cursor-pointer">
                        <NavLink
                            to="/"
                            end
                            className={({isActive}) =>
                            `${baseClass} ${isActive ? activeClass : "hover:bg-gray-700"}` 
                            }
                        >
                        <FaHome/>
                        <span>Dashboard</span>
                        </NavLink>
                       
                    </li>
                    <li className="flex items-center space-x-3 p-3 hover:bg-gray-700 rounded-md cursor-pointer">
                    <NavLink
                            to="/users"
                            end
                            className={({isActive}) =>
                            `${baseClass} ${isActive ? activeClass : "hover:bg-gray-700"}` 
                            }
                    >
                        <FaUsers/>
                        <span>Users</span>
                        </NavLink>
                       
                     </li>
                     <li className="flex items-center space-x-3 p-3 hover:bg-gray-700 rounded-md cursor-pointer">
                     <NavLink
                            to="/products"
                            end
                            className={({isActive}) =>
                            `${baseClass} ${isActive ? activeClass : "hover:bg-gray-700"}` 
                            }
                    >
                        <FaBox/>
                        <span>Products</span>
                        </NavLink>
                       
                     </li>
                     <li className="flex items-center space-x-3 p-3 hover:bg-gray-700 rounded-md cursor-pointer">
                     <NavLink
                            to="/login"
                            end
                            className={({isActive}) =>
                            `${baseClass} ${isActive ? activeClass : "hover:bg-gray-700"}` 
                            }
                    >
                        <FaSignInAlt/>
                        <span>Login</span>
                        </NavLink>
                       
                     </li>
                    
                </ul>
            </nav>
            <button className="flex items-center space-x-3 p-3 hover:bg-red-500 rounded-md cursor-pointer">
                <FaSignOutAlt/>
                <span>Logout</span>
            </button>
        </div>
    );
}