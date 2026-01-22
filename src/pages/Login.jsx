import { useEffect, useState } from "react";
import logo_ndi from "../assets/logo/logo_ndi.png";
import bg_teknologi from "../assets/img/bg_login.jpg";
import peta_indonesia from "../assets/Peta/peta_indonesi.svg";
import { useNavigate } from "react-router-dom";
import api from "../utils/api/axios";
import LoginForm from "../components/form/LoginForm";
import { login } from "../services/authService";

const Login = () => {
  const navigasi = useNavigate();
  const [active, setActive] = useState(false);
  const [tesLoginErr, setTesLoginErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [loginform, setFormLogin] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setTesLoginErr(false);
    const { name, value } = e.target;
    setFormLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!loginform.username || !loginform.password) {
    //   setTesLoginErr(true);
    //   return;
    // }

    try {
      // testing
      // const response = await fetch("http://103.185.52.135:1000/ndi/pre-login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     username: loginform.username,
      //     password: loginform.password,
      //     id_daerah: 0,
      //   }),
      // });
      // const result = await response.json();
      // if (!result.success) {
      //   setTesLoginErr(true);
      //   console.log("tes", result.message);
      //   return;
      // }
      // const message = result.message;
      // navigasi("/dashboard");
      // isi datanya
      // console.log("result adalah", result);
      // isi form
      // console.log(loginform);
      // isi messagenya
      // console.log("message", message);
      // ---//
      setLoading(true);
      // axios
      // const response = await api.post("/ndi/pre-login", {
      //   username: loginform.username,
      //   password: loginform.password,
      //   id_daerah: 0,
      // });

      // const result = response.data;
      // // console.log(result);
      // navigasi("/dashboard");
      // loginform.username = "";
      // loginform.username = "";

      // fetch
      const res = await login({
        username: loginform.username,
        password: loginform.password,
        id_daerah: 0,
      });

      navigasi("/dashboard");
      loginform.username = "";
      loginform.username = "";
      setTesLoginErr(false);
    } catch (error) {
      setMessage(error.message);
      setTesLoginErr(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${bg_teknologi})` }}
      className="h-screen w-full flex flex-col   md:flex-row items-center justify-center bg-cover bg-center bg-repeat "
    >
      <div
        className={`
    md:h-100 text-white relative md:order-1 order-2
    shadow-lg md:shadow-blue-900/40
    ${
      active
        ? "md:shadow-2xl md:shadow-blue-900/80"
        : "md:shadow-lg md:shadow-blue-900/40"
    }
    
    transition-shadow duration-1000 ease-out
    md:bg-linear-to-b md:from-blue-500 md:to-blue-700/20
    rounded-l-md flex flex-col gap-3 md:py-10 items-center overflow-hidden
  `}
      >
        <div
          className={`absolute inset-0 md:block hidden   border-t-2 border-b-2 transition-transform duration-500 ease-in-out ${
            active
              ? "border-red-500  -translate-x-full "
              : "border-red-500  translate-x-full "
          }`}
        ></div>
        <div className="px-5 flex-col flex gap-2 items-center">
          <img
            src={logo_ndi}
            alt="logo NDI"
            className="w-20 object-center md:block hidden "
          />
          <div className="flex flex-col items-center">
            <h1 className="font-semibold text-[1.1rem]">
              Nusantara data Indonesia
            </h1>
            <p className="text-[0.5rem]">
              Inovasi Digital untuk Masa Depan Bisnis Anda
            </p>
          </div>
          <div>
            <img src={peta_indonesia} alt="" className="md:w-90 " />
          </div>
        </div>
      </div>
      {/* card logib */}
      <div
        className={`  ${
          active
            ? "md:shadow-2xl md:shadow-blue-900/80"
            : "md:shadow-lg md:shadow-blue-900/40"
        } transition-shadow duration-1000 ease-out relative overflow-hidden md:h-100 md:py-10 md:order-2 order-1 px-5 w-full md:shadow-blue-900/80  md:max-w-85 lg:max-w-100   md:bg-blue-800/40  md:shadow-2xl rounded-r-md flex flex-col items-center justify-center gap-2`}
      >
        {loading && <div className={`absolute inset-0 bg-white/5 `}></div>}
        <div
          className={`absolute inset-0 md:block hidden delay-500  border-t-2 border-b-2 transition-transform duration-500 ease-in-out ${
            active
              ? "border-blue-500  -translate-x-full "
              : "border-blue-500  translate-x-full "
          }`}
        ></div>
        <div className="flex flex-col gap-1 ">
          <h1 className="font-semibold text-[1.1rem] text-wrap text-white">
            Welcome Back!
          </h1>
          <p className="text-[0.7rem]  text-white">Pleace login Your Account</p>
        </div>
        <img
          src={logo_ndi}
          alt="logo NDI"
          className="w-20 object-center md:hidden block "
        />

        <LoginForm
          loginform={loginform}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          tesLoginErr={tesLoginErr}
          active={active}
          loading={loading}
          message={message}
        />
      </div>
    </div>
  );
};

export default Login;
