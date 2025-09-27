const FindUs = () => {
  return (
    <div className="my-10">
      <div className="text-gray-500 text-2xl mb-5">Find Us On</div>
      <div className="flex flex-col">
        <div className="px-3 py-2 text-gray-500 text-left text-xl border border-gray-200 hover:border-gray-400 rounded-t-md">
          Facebook
        </div>
        <button className="px-3 py-2 text-left text-gray-500 text-xl border border-gray-200 hover:border-gray-400 ">
          LinkedIn
        </button>
        <button className="px-3 py-2 text-gray-500 text-xl border border-gray-200 hover:border-gray-400 rounded-b-md text-left">
          X
        </button>
      </div>
    </div>
  );
};

export default FindUs;
