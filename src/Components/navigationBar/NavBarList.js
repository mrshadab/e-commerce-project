import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { ListOfShop } from "./shoplist";
import { FiUser } from "react-icons/fi";
import { Categories } from "../../Redux/Action";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { ListToggle } from "../../Redux/Action";

export const NavList = ({ showSideMenu, setShowSideMenu }) => {
  // const showList = useSelector((state) => state.listToggle);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  return (
    <div
      className={`bg-transparent bg-opacity-30 h-screen fixed top-0 flex ${
        showSideMenu ? "left-0" : "-left-full"
      } duration-500 w-full  z-[1000] lg:hidden`}
    >
      <div
        className={`relative w-[60%] xsm:w-[50%] md:w-[30%] sm:w-[35%] bg-white h-screen grid grid-rows-[70px,auto] duration-1000 navList 
        ${show ? "overflow-y-auto" : "overflow-y-hidden"} overflow-x-hidden`}
      >
        <div>
          <div className="bg-[#ff7504] row-start-1 row-end-2  flex px-10 h-[70px]  items-center justify-between">
            <div className="flex gap-2">
              <FiUser className="font-bold text-xl" />
              Login
            </div>
            <div className=" absolute top-[5px] right-[5px]">
              <RxCross2
                className="cursor-pointer font-bold text-4xl md:text-[32px] xsm:text-3xl xs:text-3xl"
                onClick={() => {
                  setShowSideMenu(false);
                  setShow(false);
                }}
              />
            </div>
          </div>
          <div
            onClick={() => {
              navigate("/");
              dispatch(Categories(""));
            }}
            className="  w-full cursor-pointer bg-[#F2F4F8] hover:text-[#fd5858]  flex h-[30px] justify-between items-center xs:text-[15px] text-[18px] gap-1 md:px-4 px-3 py-6 xsm:py-5 xs:py-5"
          >
            <span>Home </span>
          </div>
          <div
            onClick={() => {
              navigate("/product");
              dispatch(Categories(""));
            }}
            className="  w-full cursor-pointer bg-[#F2F4F8] hover:text-[#fd5858]  flex h-[30px] justify-between items-center xs:text-[15px] text-[18px] gap-1 md:px-4 px-3 py-6 xsm:py-5 xs:py-5"
          >
            <span>All Product </span>
          </div>

          <div
            onClick={() => setShow(!show)}
            className="  w-full cursor-pointer bg-[#F2F4F8]  flex h-[30px] justify-between items-center xs:text-[15px] text-[18px] gap-1 md:px-4 px-3 py-6 xsm:py-5 xs:py-5"
          >
            <span>Category </span>
            <span
              className={`${
                show ? "rotate-[-180deg]" : ""
              } transition-all duration-500`}
            >
              <FaAngleDown />
            </span>
          </div>
          <div
            className={`SideMenu 
          ${show ? "h-auto" : "h-0"} ${
              show ? "opacity-100" : "opacity-0"
            } transform origin-top `}
          >
            {/* <SideMenu/> */}
            <ListOfShop />
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          setShowSideMenu(false);
          setShow(false);
        }}
        className="w-[40%] xsm:w-[50%] md:w-[70%] sm:w-[65%] h-screen bg-transparent"
      ></div>
    </div>
  );
};
