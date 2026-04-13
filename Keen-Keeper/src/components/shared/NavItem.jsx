import { NavLink } from "react-router-dom";

const NavItem = ({ to, icon: Icon, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-1 px-3 py-1.5 rounded-md text-sm transition ${
          isActive
            ? "bg-emerald-700 text-white"
            : "text-gray-600 hover:bg-gray-200"
        }`
      }
    >
      <Icon />
      {label}
    </NavLink>
  );
};

export default NavItem;