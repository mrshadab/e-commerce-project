import { ToastContainer, toast } from "react-toastify";

export const Notify = (type) =>
// const type=type==="add"?"Add To Cart Successfully" : "Remove from Cart Successfully";
  toast.success(type==="add"?"Add To Cart Successfully" : "Remove from Cart Successfully", {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
