import React, { useState } from "react";
import logo from "./logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";


function Login() {
  const [login, setLogin] = useState(true);
  const handleClick = () => {
    console.log("ok");
  };
  const navigate = useNavigate();

  return (
    <div
      className={`${
        login ? "h-screen" : "h-auto"
      }  w-full flex flex-col items-center gap-[15px] lg:pt-2 pt-4`}
    >
      <div className="absolute top-[10px] left-2">
        {" "}
        <p
          onClick={() => navigate(-1)}
          className="flex mb-4 gap-2 items-center cursor-pointer   hover:bg-slate-200 p-[2px] pl-2 pr-2 rounded-[15px]"
        >
          <FiArrowLeft />
          Continue Shopping
        </p>
      </div>
      <div>
        <img
          onClick={() => {
            navigate("/");
          }}
          className="cursor-pointer"
          src={logo}
          alt=""
        />
      </div>
      <form className="h-auto rounded-[8px] w-[350px]  p-6 pt-5 pb-[22px] border border-[#EA580C] flex flex-col">
        <div className="w-full mb-[6px]">
          <h1 className="text-[30px] form-h1">Sign in</h1>
        </div>
        <div className="w-full mb-[4px]">
          <p className="text-[12px] font-[600]">
            Enter mobile phone number or email
          </p>
        </div>
        <div className="w-full mb-[12px]">
          <input
            type="text"
            className="border-[1px] form-input border-[gray] w-full h-[30px] rounded-[3px]"
          />
        </div>
        <div className="w-full mb-[20px]">
          <button className="w-full h-[30px] rounded-[6px] flex items-center justify-center bg-[#EA580C] font-[400] text-[15px]">
            Continue
          </button>
        </div>
        <div className="w-full">
          <p className="text-[12px]">
            By continuing, you agree to Shopcart's{" "}
            <Link
              to={"/Help/Customer"}
              className="text-[#0066c0] hover:text-[#EA580C] hover:underline"
            >
              Conditions of Use
            </Link>{" "}
            and{" "}
            <Link className="text-[#0066c0] hover:text-[#EA580C] hover:underline">
              Privacy Notice
            </Link>
            .
          </p>
        </div>
        <details className="text-[12px] mt-[20px]">
          <summary>
            <Link className="text-[#0066c0] hover:text-[#EA580C] hover:underline">
              Need help?
            </Link>
          </summary>
          <div className="ml-[13px] m-1">
            {" "}
            <Link className="text-[#0066c0] hover:text-[#EA580C] hover:underline">
              Forgot Password
            </Link>
          </div>
          <div className="ml-[13px] m-1">
            {" "}
            <Link className="text-[#0066c0] hover:text-[#EA580C] hover:underline">
              Other issues with Sign-In
            </Link>
          </div>
        </details>
      </form>
      <div className="w-[350px]  flex items-center justify-center gap-2 text-[#666666]">
        <div className="w-[30%] border h-[1px]"></div>
        <div className="text-[15px] ">New to Shopcart?</div>
        <div className="w-[30%] border h-[1px]"></div>
      </div>
      <div className="w-[350px]  mb-[20px] border border-[#EA580C] rounded-[6px]">
        <div className="w-full h-[30px]  flex items-center justify-center  font-[400] text-[14px] ">
          Create your Shopcart account
        </div>
      </div>
      <div className="w-full h-full border lineB flex items-center gap-2 pt-3 flex-col">
        <div className="  h-0 w-full  "></div>
        <div className="w-[350px] pl-6 pr-6 flex justify-center gap-6">
          <Link className="text-[#0066c0] hover:text-[#EA580C] hover:underline text-[12px]">
            {" "}
            Conditions of Use{" "}
          </Link>
          <Link className="text-[#0066c0] hover:text-[#EA580C] hover:underline text-[12px]">
            {" "}
            Privacy Notice{" "}
          </Link>
          <Link className="text-[#0066c0] hover:text-[#EA580C] hover:underline text-[12px]">
            {" "}
            Help{" "}
          </Link>
        </div>
        <div className="text-[12px]">
          © 1996-2023, Shopcart.com, Inc. or its affiliates
        </div>
      </div>
    </div>
  );
}

export default Login;
