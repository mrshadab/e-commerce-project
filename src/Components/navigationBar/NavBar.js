import React, { useState } from "react";
import logo from "./logo.svg";
import { FaAngleDown } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { FiUser, FiShoppingCart } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { GetAllProduct, ListToggle } from "../../Redux/Action";
import { PageList, ShopList } from "./shoplist";
import { NavList } from "./NavBarList";
import { useNavigate } from "react-router-dom";
import { Categories } from "../../Redux/Action";

export const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.Cart);
  const [showSideMenu, setShowSideMenu] = useState(false);
  // console.log(showSideMenu);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log(`User searched for: ${searchValue}`);
  };
  return (
    <>
      <nav className="w-full bg-white shadow-md lg:h-[80px] md:h-[80px] sm:h-[80px]  h-[100px] grid lg:grid-cols-[2fr,5fr, 2fr] md:grid-cols-[1fr,2fr,1fr,60px] sm:grid-cols-[1fr,2fr,1fr,60px] xs:grid-cols-[120px,1fr,0px,35px] xsm:grid-cols-[180px,1fr,0px,55px]  md:grid-rows-[1fr] lg:grid-rows-[1fr] sm:grid-rows-[1fr] grid-rows-[1fr,55px] font-[500] text-[16px]">
        <div className="col-start-1 col-end-2 xs:row-start-1 xs:row-end-3 xsm:row-start-1 xsm:row-end-3 h-full  flex items-center justify-center sm:pl-4 xs:pl-[10px]">
          <img
            onClick={() => {
              navigate("/");
              dispatch(Categories(""));
            }}
            src={logo}
            alt="123"
            className=" cursor-pointer"
          />
        </div>
        <div className=" col-start-2 col-end-3 h-full grid sm:grid md:grid lg:grid lg:grid-cols-[20px,1fr,1fr,4fr,20px] md:grid-cols-[20px,80px,2fr,20px] items-center ">
          <div className=" hidden lg:flex col-start-2  col-end-3 h-full justify-center items-center gap-1  group">
            <span
              onClick={() => {
                navigate("/product");
                dispatch(Categories(""));
              }}
              className="group-hover:text-gray-900 text-gray-700 group-hover:border-b-[3px]  border-[blue] h-1/2 w-[85%] cursor-pointer flex items-center justify-center gap-[2px]"
            >
              Shop{" "}
              <FaAngleDown className="group-hover:rotate-[-180deg] duration-500" />
            </span>

            <div className="absolute top-0 left-0 hidden group-hover:block transition-all duration-1000">
              <ShopList />
            </div>
          </div>

          <div className="relative hidden lg:flex col-start-3 col-end-4 h-full justify-center  items-center gap-1 group">
            <span className="group-hover:text-gray-900 text-gray-700 group-hover:border-b-[3px]  border-[blue] h-1/2 w-[85%] cursor-pointer flex items-center justify-center gap-[2px]">
              Pages{" "}
              <FaAngleDown className="group-hover:rotate-[-180deg] duration-500" />
            </span>
            <div className="absolute top-0 left-0 hidden group-hover:block transition-all duration-1000">
              <PageList />
            </div>
          </div>
          <div className="input row-start-2 row-end-3 sm:row-auto lg:row-auto md:row-auto  col-start-1 col-end-4 lg:col-start-4 lg:col-end-5 w-full h-full flex items-center justify-center xs:pl-[15px]">
            <form
              onSubmit={handleFormSubmit}
              className="input w-[98%] h-3/5 rounded-full border border-gray-400 focus-within:border-none focus-within:ring-2 focus-within:ring-blue-300 focus-within:shadow-outline-blue select-none lg:px-2 md:px-2 px-1 flex items-center"
            >
              <input
                type="text"
                name="search"
                placeholder="Type to search"
                onChange={handleSearchInputChange}
                className="w-full rounded-[40px] h-10  px-1 text-[12px] sm:text-[16px] md:text-lg lg:text-xl font-normal outline-none focus:outline-none bg-transparent lg:pb-[5px] md:pb-[5px] sm:pb-[5px] xsm:pb-[3px] pb-0"
              />
              <button type="submit">
                <BiSearch className="lg:mr-2 md:lg:mr-2 mr-0  cursor-pointer text-2xl xsm:text-[18px] xs:text-[14px]" />
              </button>
            </form>
          </div>
        </div>
        <div className="cart row-start-1 row-end-2 sm:row-auto lg:row-auto md:row-auto col-start-2 col-end-4 sm:col-start-3 sm:col-end-4 md:col-start-3  md:col-end-4 xs:col-start-2 xs:col-end-4 h-full flex md:flex items-center justify-end lg:pr-7 pr-2 lg:gap-6  gap-4  sm:gap-3 sm:px-3 xs:justify-end xs:gap-2 xs:pr-4">
          <div
            className=" flex items-center gap-1 h-full cursor-pointer  xs:text-xs xsm:text-[16px] xs:font-bold "
            onClick={() => {
              navigate(`/login`);
            }}
          >
            <FiUser className="font-bold text-xl xs:text-sm xsm:text-[18px]" />
            Login
          </div>
          <div
            onClick={() => {
              navigate(`/AddToCart`);
            }}
            className="relative flex items-center gap-1  h-full cursor-pointer xs:text-xs xsm:text-[16px] xs:font-bold "
          >
            <p className="absolute h-[18px] w-[18px] xs:h-[14px] xs:w-[14px] xs:text-[10px]  left-[4px] xs:left-[3px] top-[20px] xs:top-[8px] xsm:top-[3px] rounded-[50%] flex items-center justify-center text-[13px] bg-orange-500">
              {cart.length}
            </p>
            <FiShoppingCart className="font-bold text-xl xs:text-sm xsm:text-[18px]" />{" "}
            Cart
          </div>
        </div>
        <div className=" row-start-1 row-end-2 sm:row-auto lg:row-auto md:row-auto lg:hidden flex items-center justify-center  col-start-4 col-end-5 h-full">
          <AiOutlineMenu
            className="font-bold text-3xl cursor-pointer xs:text-[20px] xsm:text-[28px]"
            onClick={() => {
              // dispatch(ListToggle())
              setShowSideMenu(true);
            }}
          />
        </div>
      </nav>
      <NavList setShowSideMenu={setShowSideMenu} showSideMenu={showSideMenu} />
    </>
  );
};
