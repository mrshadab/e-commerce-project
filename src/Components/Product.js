import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddToCartAction, GetAllProduct } from "../Redux/Action";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineStar, AiOutlineShopping } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { MdCloseFullscreen } from "react-icons/md";
import { GetProductDetail } from "../Redux/Action";
import { Notify } from "./toastNotify";

export const Product = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.AllProduct);
  const CategoriesSelector = useSelector((state) => state.Categories);
  const [isLoading, setIsLoading] = useState(true);

  // this dispatch or useEffect is getting a single product detail
  useEffect(() => {
    dispatch(GetProductDetail());
    dispatch(AddToCartAction());
  }, [dispatch]);

  // this dispatch or useEffect is getting a all product detail

  useEffect(() => {
    dispatch(GetAllProduct(CategoriesSelector, setIsLoading));
  }, [CategoriesSelector, dispatch]);

  if (isLoading) {
    return (
      <div className="w-full h-screen mt-[30px] bg-slate-300 grid place-items-center">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col min-h-screen  border border-b-lime-600 mt-[80px] ">
      <div className="w-full h-auto mt-[30px] flex flex-wrap justify-center gap-3 sm:px-[30px] md:px-[100px] xsm:px-[20px] xs:px-[5px] lg:px-0 py-[20px] ">
        {state.products?.map((value, i) => {
          return (
            <div
              // onClick={() => {
              //   navigate(`/product/${value.id}`);
              //   dispatch(GetProductDetail(value.id));
              // }}
              key={i}
              className="productBox relative lg:h-[350px] lg:w-[250px] md:w-[240px] sm:w-[230px] sm:h-[300px]  w-[180px] md:h-[320px] h-[290px] lg:pt-[30px] pt-[20px] pb-[20px] px-[20px] xs:px-[10px] xsm:px-[10px] group overflow-hidden"
            >
              {/* ---------------------Product Image ------------*/}

              <div
                onClick={() => {
                  navigate(`/product/${value.id}`);
                  dispatch(GetProductDetail(value.id));
                }}
                className="img w-full h-1/2  lg:mb-[30px] mb-4 cursor-pointer group-hover:scale-[1.1]"
              >
                <img src={value.thumbnail} alt="ThumbnailImage" />
              </div>

              {/* ---------------------Product Title -----------*/}
              <div className="xs:text-[13px] xsm:text-[13px] sm:text-[15px] md:text-[16px]  capitalize">
                {value.title}
              </div>
              {/* ------------------Product Rating------------------- */}
              <div className="flex items-center justify-center mt-2 pl-[2px] w-[45px] h-[20px] rounded-[4px] text-white text-[12px] bg-[#388E3C]">
                {value.rating}
                <AiOutlineStar />
              </div>
              {/* --------------------Product Price----------------------- */}

              <div className="mt-[10px] flex gap-[7px] items-center flex-wrap">
                {/*  ------------discountPercentage Price----------- */}

                <div className="text-[16px] xs:text-[13px] xsm:text-[13px]  font-bold">
                  ₹
                  {(value.price * (1 - value.discountPercentage / 100)).toFixed(
                    2
                  )}
                </div>
                {/* ------------Actual Price--------------- */}

                <div className="">
                  <del className="line-through text-[14px] xs:text-[12px]">
                    {value.price.toLocaleString("en-IN", {
                      style: "currency",
                      currency: "INR",
                    })}
                  </del>
                  {/* toLocaleString() returns a number as a string, using local language format and show currency symbol also*/}
                </div>

                {/*--------------------- discountPercentage----------- */}

                <div className=" text-green-700 text-[13px] xs:text-[11px]">
                  {value.discountPercentage}% off
                </div>
              </div>

              {/* ---------Add to car ---view detail product---------- */}

              <div className="heartIcon  absolute left-0 bottom-[-180px] group-hover:bottom-[0px]  flex w-full h-[120px] justify-center gap-[25px] xs:gap-[15px]">
                <button
                  onClick={() => {
                    // navigate(`/product/${value.id}`);
                    navigate(`/product/${value.id}`);
                    dispatch(GetProductDetail(value.id));
                  }}
                  className="text-[25px] w-[45px] h-[45px] rounded-full grid place-items-center translate-y-[120px] bg-slate-300 text-black hover:bg-[#ff7504] hover:text-white  "
                >
                  <span
                    className="w-full h-full grid place-items-center hover:rotate-[360deg] duration-200 "
                    title="View Product Details"
                  >
                    <MdCloseFullscreen className="ICOns " />
                  </span>
                </button>
                <button className="text-[25px] w-[45px] h-[45px] rounded-full grid place-items-center translate-y-[120px] bg-slate-300 text-black hover:bg-[#ff7504] hover:text-white ">
                  <span
                    className="w-full h-full grid place-items-center hover:rotate-[360deg] duration-200"
                    title="Add To Wishlist"
                  >
                    <FiHeart className="ICOns  " />
                  </span>
                </button>
                <button
                  onClick={() => {
                    // navigate(`/AddToCart`);
                    Notify("add")
                    dispatch(AddToCartAction(value.id));
                  }}
                  className="text-[25px] w-[45px] h-[45px] rounded-full grid place-items-center translate-y-[120px] bg-slate-300 text-black hover:bg-[#ff7504] hover:text-white "
                >
                  <span
                    className="w-full h-full grid place-items-center hover:rotate-[360deg] duration-200"
                    title="Add To Cart"
                  >
                    <AiOutlineShopping className="ICOns  " />
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
