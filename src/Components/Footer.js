import logo from "../Components/navigationBar/logo.svg";

export const Footer = () => {
  return (
    <footer className="w-full bg-yellow-950 xs:h-[100vh]   sm:h-[180vh] lg:h-screen mt-20  grid lg:grid-rows-[38%,62%] md:grid-rows-[25%,75%] sm:grid-rows-[22%,78%]  ">
      <section className="section1 bg-[#e4e4e4] h-full lg:grid-cols-6 md:grid-cols-3  grid-cols-3 xs:grid-cols-2 xsm:grid-cols-2 place-items-center  py-5   lg:px-[20px]  ">
        <div className="bg-red-300 border  border-black  lg:w-[14vw] md:w-[16vw] w-[25vw]">
          {" "}
          <img src="./images/topshop.png" alt="" />
        </div>
        <div className="bg-[#f8d32b] border border-black  lg:w-[14vw] md:w-[16vw] w-[25vw]">
          {" "}
          <img src="./images/mango.png" alt="" />
        </div>
        <div className=" border border-black  lg:w-[14vw] md:w-[16vw] w-[25vw]">
          {" "}
          <img src="./images/zara.png" alt="" />
        </div>
        <div className=" border border-black  lg:w-[14vw] md:w-[16vw] w-[25vw]">
          {" "}
          <img src="./images/bershka.png" alt="" />
        </div>
        <div className=" border border-black  lg:w-[14vw] md:w-[16vw] w-[25vw]">
          {" "}
          <img src="./images/asos.png" alt="" />
        </div>
        <div className=" border border-black lg:w-[14vw] md:w-[16vw] w-[25vw]">
          {" "}
          <img src="./images/river.png" alt="" />
        </div>
      </section>
      {/* <hr className="w-[95%] h-[0px] border border-gray-400 mx-auto" /> */}
      <section className="w-full h-full  lg:grid-rows-[1fr,2fr] grid-rows-[1fr,2fr,2fr] sm:grid-rows-[50px,450px,180px] xs:grid-rows-[50px,380px,200px] xsm:grid-rows-[100px,2fr,200px] grid lg:grid-cols-[2fr,4fr] grid-col-[1fr] lg:px-[30px] px-[20px] lg:pt-[30px] pt-[20px] xs:pt-[5px] grid-flow-row bg-orange-600">
        <div className="  row-start-1 row-end-2 flex lg:items-start items-center">
          <img className="xs:w-[120px]" src={logo} alt="logo "  />
        </div>
        <div className=" footerList grid lg:grid-rows-1 md:grid-rows-1 grid-rows-2  lg:grid-cols-4 md:grid-cols-4 grid-cols-2  items-center gap-0   justify-center lg:row-start-1 lg:row-end-3 row-start-2 row-end-3 w-full h-full">
          <div className="flex flex-col lg:gap-[15px] gap-[4px] lg:py-0 py-[20px] xs:text-[12px]  xs:py-[10px] lg:pl-[10px] pl-[20px] ">
            <li>Fashion</li>
            <li>Education Product</li>
            <li>jewellery</li>
            <li>Beauty Products</li>
            <li>Electronics & Gadget</li>
            <li>Sneakers</li>
            <li>Travel Accessories</li>
          </div>
          <div className="flex flex-col lg:gap-[15px] gap-[4px] lg:py-0 py-[20px] xs:text-[12px] xs:py-[10px] lg:pl-[10px] pl-[20px]  ">
            <li>About Us</li>
            <li>About Shopcart</li>
            <li>Careers</li>
            <li>News & Blog</li>
            <li>Help</li>
            <li>Affiliate & Partners</li>
            <li>Ideas & Guides</li>
          </div>
          <div className="flex flex-col lg:gap-[15px] gap-[4px] lg:py-0 py-[20px] xs:text-[12px] xs:py-[10px] lg:pl-[10px] pl-[20px]  ">
            <li>Services</li>
            <li>Gift Card</li>
            <li>Mobile App</li>
            <li>Shipping & Delivery</li>
            <li>Order Pickup</li>
            <li>Account Signup</li>
          </div>
          <div className="flex flex-col lg:gap-[15px] gap-[4px] lg:py-0 py-[20px] xs:text-[12px] xs:py-[10px] lg:pl-[10px] pl-[20px]  ">
            <li>Help</li>
            <li>Shopcart Help</li>
            <li>Returns</li>
            <li>Track Orders</li>
            <li>Contact Us</li>
            <li>Feedback</li>
            <li>Security & Fraud</li>
          </div>
        </div>
        <div className="lg:row-start-2 lg:row-end-3 row-start-3 row-end-4 col-start-1  col-end-2 lg:w-full md:w-[50%] sm:w-[80%] w-[100%] xs:flex xs:justify-center  xs:flex-col xs:gap-3 xsm:flex xsm:justify-center  xsm:flex-col xsm:gap-3 h-full lg:mt-0 xsm:mt-[00px] xs:mt-[0px] mt-[30px] ">
          <h1 className="lg:ml-[6px] md:ml-[6px] ml-[20px] font-bold text-2xl xs:text-[18px]">
            Accepted Payments
          </h1>
          <div className="lg:w-[23vw] w-[70%] xs:w-[80%] lg:h-1/2 md:h-1/2 h-[70%] xs:h-[50%] xsm:h-[30%] place-items-center  grid grid-cols-4  lg:mt-7 mt-0 payment">
            <button className="w-[60px]  ">
              <img src="./images/stripe.png" alt="" />
            </button>
            <button className="w-[60px] ">
              <img src="./images/visa.png" alt="" />
            </button>
            <button className="w-[60px] ">
              <img src="./images/Mastercard.png" alt="" />
            </button>
            <button className="w-[60px] ">
              <img src="./images/Amazon.png" alt="" />
            </button>
            <button className="w-[60px] ">
              <img src="./images/Klarna.png" alt="" />
            </button>
            <button className="w-[60px] ">
              <img src="./images/PayPal.png" alt="" />
            </button>
            <button className="w-[60px] ">
              <img src="./images/ApplePay.png" alt="" />
            </button>
            <button className="w-[60px] ">
              <img src="./images/GooglePay.png" alt="" />
            </button>
          </div>
        </div>
      </section>
    </footer>
  );
};
