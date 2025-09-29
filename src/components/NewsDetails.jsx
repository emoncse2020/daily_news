import { useLoaderData, useParams } from "react-router";
import Header from "./Header";
import RightAside from "./homeLayout/RightAside";
import NewsDetailsCard from "./NewsDetailsCard";
import { useEffect, useState } from "react";
import PrivateRoute from "../provider/PrivateRoute";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});
  console.log(data, id);

  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id === id);
    setNews(newsDetails);
  }, [data, id]);
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <PrivateRoute>
            <NewsDetailsCard news={news} />
          </PrivateRoute>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
