import { NavLink } from "react-router-dom";
import { FaHome, FaChartLine, FaChartBar } from "react-icons/fa";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <div className="bg-base-200 border-b border-gray-300">
      <div className="navbar  mx-auto px-8">


           {/* Logo */}
        <div className="navbar-start">
          <NavLink to="/" className="text-2xl font-bold">
            <span className="text-black">Keen</span>
            <span className="text-emerald-600">Keeper</span>
          </NavLink>
        </div>

        {/* Menu */}
        <div className="navbar-end gap-2">

          <NavItem to="/" icon={FaHome} label="Home" />
          <NavItem to="/timeline" icon={FaChartLine} label="Timeline" />
          <NavItem to="/stats" icon={FaChartBar} label="Stats" />

        </div>


        {/* Logo */}
        {/* <div className="navbar-start">
          <NavLink
            to="/"
            className="text-xl font-bold text-gray-800"
          >
            <span className="text-black">Keen</span>
            <span className="text-emerald-600">Keeper</span>
          </NavLink>
        </div>

        {/* Menu */}
        {/* <div className="navbar-end gap-2">


          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-1 px-3 py-1.5 rounded-md text-sm transition ${
                isActive
                  ? "bg-emerald-700 text-white"
                  : "text-gray-600 hover:bg-gray-200"
              }`
            }
          >
            <FaHome />
            Home
          </NavLink>

      
          <NavLink
            to="/timeline"
            className={({ isActive }) =>
              `flex items-center gap-1 px-3 py-1.5 rounded-md text-sm transition ${
                isActive
                  ? "bg-emerald-700 text-white"
                  : "text-gray-600 hover:bg-gray-200"
              }`
            }
          >
            <FaChartLine />
            Timeline
          </NavLink>

  
          <NavLink
            to="/stats"
            className={({ isActive }) =>
              `flex items-center gap-1 px-3 py-1.5 rounded-md text-sm transition ${
                isActive
                  ? "bg-emerald-700 text-white"
                  : "text-gray-600 hover:bg-gray-200"
              }`
            }
          >
            <FaChartBar />
            Stats
          </NavLink>

        </div>  */}
      </div>
    </div>
  );
};

export default Navbar;