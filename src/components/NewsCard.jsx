const NewsCard = ({ news }) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:-mx-6">
          {/* Main Article Content */}
          <div className="lg:w-3/4 lg:px-6">
            <img
              className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
              src={news.image_url}
              alt={news.title}
            />

            <div>
              <p className="mt-6 text-sm text-blue-500 uppercase">
                {news.rating?.badge || "Latest News"}
              </p>

              <h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
                {news.title}
              </h1>

              {/* Paragraph */}
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                {news.details.slice(0, 200)}...
                <button className="mt-2 text-blue-600 hover:underline">
                  Read more
                </button>
              </p>

              {/* Read more... link */}

              {/* Author/Meta Block */}
              <div className="flex items-center mt-6">
                <img
                  className="object-cover object-center w-10 h-10 rounded-full"
                  src={news.author.img}
                  alt={news.author.name}
                />

                <div className="mx-4">
                  <h1 className="text-sm text-gray-700 dark:text-gray-200">
                    {news.author.name}
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(news.author.published_date).toDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Content */}
          <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
            <div>
              <h3 className="text-blue-500 capitalize">Tags</h3>
              {news.tags.map((tag, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 "
                >
                  {tag}
                </a>
              ))}
            </div>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />

            <div>
              <h3 className="text-blue-500 capitalize">Total Views</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-400">
                👁 {news.total_view}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCard;
