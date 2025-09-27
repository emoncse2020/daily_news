import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div>
      <div className="flex justify-center px-5 py-2 shadow bg-gray-200 gap-5">
        <span className="bg-red-500 text-white px-3 py-2 mr-2 ">Latest</span>
        <Marquee>
          Breaking News: Major Updates on Local Elections – Stay Tuned for Live
          Reports! | Stock Market Hits Record Highs – Investors Optimistic About
          Future Growth! | International Sports Event Kicks Off – Fans Excited
          Worldwide!
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
