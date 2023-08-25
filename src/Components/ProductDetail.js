import { AiOutlineStar } from "react-icons/ai";
import { FiArrowLeft } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetProductDetail } from "../Redux/Action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AddToCartAction } from "../Redux/Action";
import { Notify } from "./toastNotify";
export const ProductDetail = () => {
  
  const [changeThumbnailState, setChangeThumbnailState] = useState({
    thumbnail: null,
    ThumbnailTrue: false,
    active: "",
  });
  // console.log(changeThumbnailState)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productDSelector = useSelector((state) => state.ProductDetail);
  const { id } = useParams();
  useEffect(() => {
    dispatch(GetProductDetail(id));
  }, [dispatch, id]);

  // Add conditional rendering to handle the case where the data is not available yet
  if (!productDSelector) {
    return (
      <div className="w-full h-screen mt-[30px] bg-slate-300 grid place-items-center">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <div className="ProductDetail relative w-full lg:h-screen md:h-[90vh] h-[155vh] xsm:h-auto xs:h-auto grid lg:grid-cols-[3fr,4fr] md:grid-cols-[3fr,4fr] grid-cols-1  mt-[80px] xs:mt-[100px] xsm:mt-[100px] p-[15px] ">
      <div className="absolute top-[10px] left-2">
        {" "}
        <p
          onClick={() => navigate(-1)}
          className="duration-500 flex mb-4 gap-2 items-center cursor-pointer   hover:bg-slate-200 p-[2px] pl-2 pr-2 rounded-[15px]"
        >
          <FiArrowLeft />
          Continue Shopping
        </p>
      </div>
      <section className="pdSection1  grid   lg:grid-rows-[25vw,5vw,2fr] md:grid-rows-[25vw,5vw,2fr] grid-rows-[4fr,2fr] gap-3 h-full mt-[30px]">
        <div className="row-start-1 row-end-2 grid grid-cols-[1fr,6fr] gap-[15px] h-auto w-full border border-gray-400 p-4">
          <div className="overflow-y-auto ">
            {productDSelector.images.map((value, index) => {
              return (
                <div
                  key={index}
                  className="ProductImages w-full h-auto border border-gray-400 active:border-2 active:border-blue-800 mb-1"
                  style={{
                    border:
                      changeThumbnailState.active === value ? " 2px solid blue " : "",
                  }}
                >
                  <img
                    src={value}
                    alt="img"
                    onMouseOver={(s) => {
                      // console.log("this is e.target",s.target.src)

                      setChangeThumbnailState({
                        ...changeThumbnailState,
                        thumbnail: value,
                        ThumbnailTrue: true,
                        active: s.target.src,
                      });
                    }}
                  />
                </div>
              );
            })}
          </div>
          <div className="thumbnailImg ">
            <img
              src={
                changeThumbnailState.ThumbnailTrue
                  ? changeThumbnailState.thumbnail
                  : productDSelector.thumbnail
              }
              alt="img"
            />
          </div>
        </div>
        <div className="lg:row-start-2 lg:row-end-3 h-full w-full  flex gap-[20px] justify-center items-center">
          <button
            onClick={() => {
              // alert("Add to cart successfully");
              dispatch(AddToCartAction(productDSelector.id));
              Notify("add")
            }}
            className="lg:w-[13vw] lg:h-[3.5vw] md:w-[130px] md:h-[40px] w-[100px] h-[30px] lg:text-xl md:text-[18px] text-[15px]  rounded-[3px] bg-[#FF9F00]"
          >
            Add To Cart
          </button>
          <button className="lg:w-[13vw] lg:h-[3.5vw] md:w-[130px] md:h-[40px] w-[100px] h-[30px] lg:text-xl md:text-[18px] text-[15px] rounded-[3px] bg-[#FB641B]">
            Buy Now
          </button>
        </div>
      </section>
      <section className="pdSection2    px-[20px] pt-[20px] h-full ">
        {/* ------------Product Title---------------------*/}

        <div className="capitalize lg:text-[30px] ">
          {productDSelector.title}
        </div>

        {/* -------------product Rating--------------- */}

        <div className="flex items-center justify-center mt-[30px] pl-[2px] w-[50px] h-[25px] rounded-[5px] text-white text-[14px] bg-[#388E3C]">
          {productDSelector.rating}
          <AiOutlineStar />
        </div>
        {/* --------------Total Discount------------------- */}
        <div className="text-green-700 text-[17px] xs:text-[11px] flex gap-1 lg:mt-[30px] md:mt-[30px] mt-[15px]">
          <span>Extra</span>{" "}
          <span>
            ₹
            {(
              productDSelector.price -
              productDSelector.price *
                (1 - productDSelector.discountPercentage / 100)
            ).toFixed(2)}
          </span>
          <span> Off</span>
        </div>
        {/* --------------------Product Price----------------------- */}

        <div className="mt-[10px] flex gap-[12px] items-center flex-wrap">
          {/*  ------------discountPercentage Price----------- */}
          <div className="text-[30px] xs:text-[13px] xsm:text-[13px]  font-bold">
            ₹
            {(
              productDSelector.price *
              (1 - productDSelector.discountPercentage / 100)
            ).toFixed(2)}
          </div>

          {/* ------------Actual Price--------------- */}
          <div className="">
            <del className="line-through text-[18px]  xs:text-[12px]">
              {productDSelector.price.toLocaleString("en-IN", {
                style: "currency",
                currency: "INR",
              })}
            </del>
            {/* toLocaleString() returns a number as a string, using local language format and show currency symbol also*/}
          </div>
          {/*--------------------- discountPercentage----------- */}
          <div className=" text-green-700 text-[13px] xs:text-[11px]">
            {productDSelector.discountPercentage}% off
          </div>
        </div>
        <div className="capitalize mt-4 text-[red]">
          {" "}
          Hurry, Only <span>{productDSelector.stock}</span> left!
        </div>
        <div className="capitalize mt-4 gap-6 flex lg:flex-row sm:flex-col md:flex-col xs:flex-col xsm:flex-col">
          <h1 className=" text-[#fd5656] underline font-bold">Description:</h1>
          <p>
            {productDSelector.description} ....
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
              beatae facere labore ut quaerat. Tempora rem, amet voluptas totam
              reprehenderit, eius, distinctio aperiam possimus illum repellat
              assumenda.
              <span className="hidden lg:block md:block">
                doloremque corporis exercitationem obcaecati animi modi placeat
                qui quibusdam quis quod nemo error. Accusamus sequi ipsum
                possimus! Ducimus dolorem laboriosam laudantium quod
              </span>
              , beatae atque voluptatum recusandae nisi unde, maxime quo.
              Recusandae sequi.
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};
