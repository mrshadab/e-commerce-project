import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./Components/Footer";
import { Product } from "./Components/Product";
import { HomePage } from "./Pages/HomePage";
import { NavBar } from "./Components/navigationBar/NavBar";
import { ProductDetail } from "./Components/ProductDetail";
import { AddToCart } from "./Components/AddToCart";
import Login from "./Pages/login";
import { useLocation } from "react-router-dom";
import { HelpAndServices } from "./Pages/Help";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
function App() {
  const location = useLocation();
  const isLoginRoute = location.pathname === "/login";


  return (
    <div className="App w-full  relative">
      {/* <NavBar /> */}
      {!isLoginRoute && <NavBar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/AddToCart" element={<AddToCart  />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Help/Customer" element={<HelpAndServices />} />
      </Routes>
      {!isLoginRoute && <Footer />}
      <ToastContainer />
    </div>
  );
}

export default App;
