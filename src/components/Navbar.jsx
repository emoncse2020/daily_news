import { NavLink } from "react-router";
import user from "../assets/user.png";

const Navbar = () => {
  return (
    <nav>
      <div className="grid md:grid-cols-3">
        <div></div>
        <div className="flex justify-center gap-3">
          <NavLink
            to={""}
            className={({ isActive }) =>
              isActive ? "text-green-400" : "text-gray-400"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive ? "text-green-400" : "text-gray-400"
            }
          >
            About
          </NavLink>
          <NavLink
            to={"/career"}
            className={({ isActive }) =>
              isActive ? "text-green-400" : "text-gray-400"
            }
          >
            Career
          </NavLink>
        </div>
        <div className="flex justify-end gap-3">
          <img src={user} alt="" />
          <button className="text-white bg-gray-600 px-8 py-2 rounded text-xl font-semibold">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
