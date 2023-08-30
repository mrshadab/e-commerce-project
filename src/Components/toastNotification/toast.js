import { AiFillCheckCircle } from "react-icons/ai";
export const Toast = () => {
    return (
      <div className="w-[300px] h-16 bg-black bg-opacity-80 text-white absolute left-[530px] top-20 z-[2000] flex items-center p-3" >
        <AiFillCheckCircle className=" w-6 h-6 text-[#26bc4e]"/>
        <p></p>
      </div>
    );
  };
  