const LoginForm = ({
  loginform,
  handleChange,
  handleSubmit,
  tesLoginErr,
  active,
  logo_ndi,
  loading,
  message,
}) => {
  return (
    <div className="md:bg-white/10  w-full  rounded-md py-5 px-4 relative">
      <form action="" className="flex-col flex gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1 items-start text-[0.9rem] ">
          <label htmlFor="" className="">
            <img src="" alt="" />
            <p className="text-white">Username</p>
          </label>
          <input
            name="username"
            value={loginform.username}
            onChange={handleChange}
            type="text"
            required
            placeholder="enter your username"
            id=""
            className="outline-none ring-none w-full  transition duration-500 p-2 rounded shadow bg-black/20  text-white ring-blue-800 ring-1 focus:ring-blue-400 md:min-w-65  lg:min-w-70 "
          />
        </div>
        <div className="flex flex-col gap-1 items-start text-[0.9rem] relative mb-1">
          <label htmlFor="" className="">
            <img src="" alt="" />
            <p className="md:text-white">password</p>
          </label>
          <input
            name="password"
            value={loginform.password}
            onChange={handleChange}
            type="Password"
            placeholder="enter your password"
            required
            id=""
            className="outline-none ring-none  w-full    transition duration-500 p-2 rounded shadow bg-black/20  text-white ring-blue-800 ring-1 focus:ring-blue-400 md:min-w-65  lg:min-w-70 "
          />
          {tesLoginErr && (
            <p className="text-[0.8rem] text-white border-b px-2 rounded bg-red-500 border-red-600 inline-block absolute -bottom-6">
              {message}
            </p>
          )}
        </div>

        <div className="flex justify-between text-[0.8rem] mt-2">
          <div className="flex gap-1 items-center">
            <input type="checkbox" />
            <p className="text-white">remember me?</p>
          </div>
          <div className="">
            <a
              href="#"
              className="text-white  transition-colors duration-300 hover:border-b border-white"
            >
              forger Password?
            </a>
          </div>
        </div>

        <button
          type="submit"
          className="relative overflow-hidden p-2 cursor-pointer hover:bg-blue-800/50 rounded transition-all duration-500 bg-blue-800/40   text-white border-b-white/10 border-t-[#cdcdcd]"
        >
          <span
            className={`absolute inset-0   border-t-2 border-b-2 transition-transform duration-500 ease-in-out ${
              active
                ? "border-blue-600  translate-x-full "
                : "border-blue-500  -translate-x-full "
            }`}
          />
          {loading ? (
            <span className="relative z-10">loading...</span>
          ) : (
            <span className="relative z-10">Login</span>
          )}
        </button>
      </form>
    </div>
  );
};
export default LoginForm;
