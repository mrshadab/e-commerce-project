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
    </div>
  );
};
