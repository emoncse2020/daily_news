import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div>
      <nav className="my-8">
        <Navbar />
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
