import { NavLink } from "react-router";
import userImg from "../assets/user.png";
import { use } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const handleLogout = () => {
    signOutUser()
      .then(() => {
        console.log("Log out successfull");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
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
          <img src={userImg} alt="" />
          <NavLink
            to={"/auth/login"}
            className="text-white bg-gray-600 px-8 py-2 rounded text-xl font-semibold"
          >
            {user ? (
              <button onClick={handleLogout}>Log Out</button>
            ) : (
              <NavLink to={"/auth/login"}>Login</NavLink>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
