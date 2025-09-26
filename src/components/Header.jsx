import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  const today = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className="flex flex-col justify-center items-center my-10 space-y-4">
      <img src={logo} alt="" />
      <h1 className="text-2xl text-gray-500">
        {" "}
        Journalism Without Fear or Favour
      </h1>

      <p>{format(new Date(), "EEEE, dd MMMM yyyy")}</p>
    </div>
  );
};

export default Header;
