import { useNavigate } from "react-router-dom";

// import logo from "../Components/navigationBar/logo.s
export const HomeComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="homeParentDiv flex flex-col justify-between ">
      <main className="w-full md:h-[86vh] sm:h-[76vh] xs:h-[50vh] xsm:h-[50vh]  h-[66vh] lg:h-[101vh] mt-[80px] ">
        <div className="home xs:w-screen w-full md:h-[85vh] sm:h-[75vh] xs:h-[100%] xsm:h-[100%] h-[65vh] lg:h-screen  flex justify-center flex-col gap-[28px] lg:gap-[35px] pl-[30px] md:pl-[50px] lg:pl-[100px] bg-center">
          <h1 className="text-[5vw]  font-serif font-[900] ">New Collection</h1>
          <button
            onClick={() => {
              navigate("/product");
            }}
            className="uppercase bg-[#0315FF] hover:bg-[#FC427B] duration-500 w-[120px] h-[30px] sm:w-[200px] sm:h-[45px] md:h-[45px] md:w-[200px] lg:w-[230px] lg:h-[60px] text-[10px] sm:text-[18px] md:text-[18px] lg:text-[20px] font-[500]  text-white rounded-[5px] "
          >
            view Collections
          </button>
        </div>
      </main>

      {/* --------------------------footer start------------------------ */}

      {/* <footer className="w-full sm:h-[80vh] h-[70vh]  md:h-[90vh] lg:h-screen mt-20  grid grid-rows-[37%,1%,62%]">
        <section className="section1 bg-[#F5F7F9] h-full lg:grid-cols-6 md:grid-cols-3  grid-cols-3 xs:grid-cols-2 place-items-center  py-5   lg:px-[20px]  ">
          <div className="bg-red-300 border  border-black  lg:w-[14vw]  w-[25vw]">
            {" "}
            <img src="./images/topshop.png" alt="" />
          </div>
          <div className="bg-[#f8d32b] border border-black  lg:w-[14vw]  w-[25vw]">
            {" "}
            <img src="./images/mango.png" alt="" />
          </div>
          <div className=" border border-black  lg:w-[14vw]  w-[25vw]">
            {" "}
            <img src="./images/zara.png" alt="" />
          </div>
          <div className=" border border-black  lg:w-[14vw]  w-[25vw]">
            {" "}
            <img src="./images/bershka.png" alt="" />
          </div>
          <div className=" border border-black  lg:w-[14vw]  w-[25vw]">
            {" "}
            <img src="./images/asos.png" alt="" />
          </div>
          <div className=" border border-black lg:w-[14vw]  w-[25vw]">
            {" "}
            <img src="./images/river.png" alt="" />
          </div>
        </section>
        <hr className="w-[95%] h-[0px] border border-gray-400 mx-auto"/>
        <section className="w-full h-full bg-[#ffffff] grid grid-cols-[3fr,1fr,1fr,1fr,1fr] lg:p-[20px]">
          <div className=""><img src={logo} alt="" /></div>
          <div>shfklsdlfjsdk</div>
          <div>shfklsdlfjsdk</div>
          <div>shfklsdlfjsdk</div>
          <div>shfklsdlfjsdk</div>
        </section>
      </footer> */}
    </div>
  );
};
