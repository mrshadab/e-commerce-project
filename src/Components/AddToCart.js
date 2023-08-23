import { useDispatch, useSelector } from "react-redux";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineStar } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { FiArrowLeft } from "react-icons/fi";
import {
  RemoveFromCartAction,
  IncrementQty,
  DecrementQty,
  GetProductDetail,
} from "../Redux/Action";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Notify } from "./toastNotify";

export const AddToCart = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.Cart);

  let total = 0;
  cart.forEach((item) => {
    total += item.price * (1 - item.discountPercentage / 100) * item.qty;
  });
  // console.log("total:", total.toFixed(2));
  let actualPrice = 0;
  cart.forEach((item) => {
    actualPrice += item.price * item.qty;
  });

  useEffect(() => {
    dispatch(GetProductDetail());
  }, [dispatch]);

  return (
    <div className=" min-h-screen flex flex-col gap-[15px]  w-full lg:px-[150px] md:px-[90px] sm:px-[30px] xsm:px-[25px] px-[15px] pt-[80px] xsm:pt-[100px] xs:pt-[100px]">
      <div className="border-b-2 border-gray-400 py-[12px] ">
        <p
          onClick={() => navigate(-1)}
          className="flex mb-4 gap-2 items-center cursor-pointer w-[180px]  hover:bg-slate-200 p-[2px] pl-2 pr-2 rounded-[15px]"
        >
          <FiArrowLeft />
          Continue Shopping
        </p>
        <h1 className="text-[30px]">Shopping Cart</h1>
      </div>
      <div className="w-full  bg-[#EAEDED]  h-[430px] xs:h-[640px] xs:min-h-[150px] xsm:h-[640px] xsm:min-h-[150px] py-[15px]  lg:px-[70px] md:px-[40px] sm:px-[10px] px-[10px] rounded-lg">
        <div className="scrollCart h-full   overflow-y-scroll px-[5px]">
          <div className="flex flex-col h-auto ">
            {cart.map((data, index) => {
              return (
                <div>
                  <div
                    key={data.id}
                    className="w-full h-[97px] xsm:h-[200px] xs:h-[200px] rounded-[10px]  grid grid-cols-[2fr,3fr,2fr,2fr,1fr]  xsm:grid-cols-[1fr,2fr] xsm:grid-rows-[2fr,2fr,1fr] xs:grid-cols-[2fr,2fr] xs:grid-rows-[2fr,2fr,1fr] xsm:gap-2"
                  >
                    <div
                      onClick={() => {
                        navigate(`/product/${data.id}`);
                        dispatch(GetProductDetail(data.id));
                      }}
                      className="w-full h-full flex items-center justify-center xsm:row-start-1 cursor-pointer xsm:row-end-3 xs:row-start-1 xs:row-end-3"
                    >
                      <span className="w-[80px] xsm:w-[150px] xs:w-[110px] flex justify-center h-auto ">
                        <img
                          className="w-[70px] h-[80px] xsm:h-[100%] xsm:w-[100%] xs:h-[100%] xs:w-[100%] aspect-[3/2]  object-contain"
                          src={data.thumbnail}
                          alt="product"
                        />
                      </span>
                    </div>
                    <div className="w-full h-full flex items-center xs:items-end xsm:items-end capitalize">
                      {data.title}
                    </div>
                    <div className="w-full h-full flex items-center justify-center gap-3 xsm:row-start-3 xsm:row-end-4 xsm:col-start-1 xsm:col-end-2    xs:row-start-3 xs:row-end-4 xs:col-start-1 xs:col-end-2">
                      <button onClick={() => dispatch(DecrementQty(data.id))}>
                        <AiOutlineMinus />
                      </button>
                      <input
                        type="text"
                        value={data.qty}
                        readOnly
                        className="outline-none  w-[30px] text-center"
                      />
                      <button onClick={() => dispatch(IncrementQty(data.id))}>
                        <AiOutlinePlus />
                      </button>
                    </div>
                    <div className="w-full h-full flex items-center justify-center xsm:items-start xsm:justify-start xsm:row-start-2 xsm:row-end-3 xsm:col-start-2 xsm:col-end-3     xs:items-center xs:justify-start xs:row-start-2 xs:row-end-3 xs:col-start-2 xs:col-end-3">
                      {/* <span>{data.price * data.qty}₹</span> */}
                      <span>
                        {(
                          data.price *
                          (1 - data.discountPercentage / 100) *
                          data.qty
                        ).toFixed(2)}
                        ₹
                      </span>
                    </div>
                    <div className="w-full h-full flex items-center justify-center text-red-700 text-[22px]  xsm:justify-start  xs:justify-start">
                      <BsTrash
                        onClick={() => {
                          dispatch(RemoveFromCartAction(data.id));
                          // alert("Remove successfully");
                          Notify("Remove")
                        }}
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="w-full border-b-2 border-[#9e9e9e]"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="border-2 border-gray-400 py-[12px] ">
        <h1 className="text-[30px]">Total:{total.toFixed(2)}</h1>
        <h1 className="text-[30px]">actualPrice:{actualPrice.toFixed(2)}</h1>
      </div>
    </div>
  );
};
