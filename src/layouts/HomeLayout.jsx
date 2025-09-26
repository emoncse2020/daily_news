import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";

const HomeLayout = () => {
  return (
    <div className="w-11/12 mx-auto">
      <header>
        <Header></Header>
        <section>
          <LatestNews></LatestNews>
        </section>
      </header>
      <main>
        <section className="left_nav"></section>
        <section>
          <Outlet></Outlet>
        </section>
      </main>
    </div>
  );
};

export default HomeLayout;
