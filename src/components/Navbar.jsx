import logo from "../assets/logo/logo_ndi.png";
import person from "../assets/logo/humans.jpg";
const Navbar = () => {
  return (
    <div className=" top-0 fixed  w-full rounde-b group rounded-md shadow bg-white z-100 py-5 px-10 flex items-center justify-between">
      <div className="flex justify-between w-full relative">
        <div className="flex items-center gap-2">
          <img src={logo} alt="" className="max-w-10" />
          <h1 className="font-bold">Nusantara Data Indonesia Dashboard</h1>
        </div>
        <div className="flex items-center md:gap-2 md:flex-row flex-col gap-1 justify-between  ">
          <h1 className=" md:inline inline-block order-2 md:order-1 text-center">
            Welcome, <span className="font-bold">Imam!</span>
          </h1>
          <img src={person} alt="" className="max-w-9 order-1 md:order-2" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
