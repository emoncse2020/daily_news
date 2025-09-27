const SocialLogin = () => {
  return (
    <div>
      <h2 className="text-2xl mb-5 text-gray-500">Login With</h2>
      <div className="flex flex-col space-y-3">
        <div className="text-2xl text-blue-400 border border-blue-500 rounded w-full text-center px-3 py-2">
          Login With Google
        </div>
        <div className="text-2xl text-gray-400 border border-gray-500 rounded w-full text-center px-3 py-2">
          Login With Github
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
