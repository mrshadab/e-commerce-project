import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Categories } from "../../Redux/Action";

export const ShopList = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="ShopListt flex justify-center w-screen bg-white pt-5 pb-0 px-[30px] absolute left-0 top-[80px] ">
      {/* <ul className="w-auto">
        <li>Women's Collection</li>
        <li
          onClick={() => {
            dispatch(Categories("/womens-dresses"));
          }}
        >
          <NavLink to="/product">Women's Dresses</NavLink>
        </li>
        <li
          onClick={() => {
            dispatch(Categories("/womens-shoes"));
          }}
        >
          <NavLink to="/product">Women's Shoes</NavLink>
        </li>
        <li
          onClick={() => {
            dispatch(Categories("/womens-watches"));
          }}
        >
          <NavLink to="/product">Women's watches</NavLink>
        </li>
        <li
          onClick={() => {
            dispatch(Categories("/womens-bags"));
          }}
        >
          <NavLink to="/product">Women's Bags</NavLink>
        </li>
        <li
          onClick={() => {
            dispatch(Categories("/womens-jewellery"));
          }}
        >
          <NavLink to="/product">Women's Jewellery</NavLink>
        </li>
        <li
          onClick={() => {
            dispatch(Categories("/tops"));
          }}
        >
          <NavLink to="/product">Tops</NavLink>
        </li>
      </ul>
      <ul className="w-auto">
        <li>Men's Collection</li>
        <li
          onClick={() => {
            dispatch(Categories("/mens-shoes"));
          }}
        >
          <NavLink to="/product">Mens Shoes</NavLink>
        </li>
        <li
          onClick={() => {
            dispatch(Categories("/mens-watches"));
          }}
        >
          <NavLink to="/product">Mens-watches</NavLink>
        </li>
        <li
          onClick={() => {
            dispatch(Categories("/mens-shirts"));
          }}
        >
          <NavLink to="/product">Mens Shirts</NavLink>
        </li>
        <li
          onClick={() => {
            dispatch(Categories("/sunglasses"));
          }}
        >
          <NavLink to="/product">Sunglasses</NavLink>
        </li>
      </ul>
      <ul className="w-auto">
        <li>beauty and Others</li>
        <li
          onClick={() => {
            dispatch(Categories("/fragrances"));
          }}
        >
          <NavLink to="/product">Fragrances</NavLink>
        </li>
        <li
          onClick={() => {
            dispatch(Categories("/skincare"));
          }}
        >
          <NavLink to="/product">Skincare</NavLink>
        </li>
      </ul>

      <ul className="w-auto">
        <li>Electronics</li>

        <li
          onClick={() => {
            dispatch(Categories("/smartphones"));
          }}
        >
          <NavLink to="/product">Smartphones</NavLink>
        </li>
        <li
          onClick={() => {
            dispatch(Categories("/laptops"));
          }}
        >
          <NavLink to="/product">Laptops</NavLink>
        </li>
      </ul>
      <ul className="w-auto">
        <li>Home And Furniture</li>
        <li
          onClick={() => {
            dispatch(Categories("/home-decoration"));
          }}
        >
          <NavLink to="/product">Home Decoration</NavLink>
        </li>
        <li
          onClick={() => {
            dispatch(Categories("/furniture"));
          }}
        >
          <NavLink to="/product">Furniture</NavLink>
        </li>
        <li
          onClick={() => {
            dispatch(Categories("/lighting"));
          }}
        >
          <NavLink to="/product">Lighting</NavLink>
        </li>
      </ul>
      <ul className="w-auto">
        <li>Groceries</li>
        <li
          onClick={() => {
            dispatch(Categories("/groceries"));
          }}
        >
          <NavLink to="/product">Groceries</NavLink>
        </li>
      </ul>
      <ul className="w-auto">
        <li>Automobile</li>
        <li
          onClick={() => {
            dispatch(Categories("/automotive"));
          }}
        >
          <NavLink to="/product">Automotive</NavLink>
        </li>
        <li
          onClick={() => {
            dispatch(Categories("/motorcycle"));
          }}
        >
          <NavLink to="/product">Motorcycle</NavLink>
        </li>
      </ul> */}
      <ListOfShop/>
    </div>
  );
};

export const PageList = () => {
  const dispatch = useDispatch();

  return (
    <div className="PageList text-start absolute left-0 top-[80px] bg-white pb-0 w-[200px] h-[200px]">
      <ul className="flex flex-col justify-around w-full h-full px-[10px]">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li onClick={() => dispatch(Categories(""))}>
          <NavLink to="/product">Shop </NavLink>
        </li>
        <li>Product Details</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export const ListOfShop = () => {
  const dispatch = useDispatch();
  
  return (
    <>
      {" "}
      <ul className="w-auto">
        <li>Women's Collection</li>
        <li
          onClick={() => {
            dispatch(Categories("/womens-dresses"));
          }}
        >
          <NavLink to="/product">Women's Dresses</NavLink>
        </li>
        <li
          onClick={() => {
            dispatch(Categories("/womens-shoes"));
          }}
        >
          <NavLink to="/product">Women's Shoes</NavLink>
        </li>
        <li
          onClick={() => {
            dispatch(Categories("/womens-watches"));
          }}
        >
          <NavLink to="/product">Women's watches</NavLink>
        </li>
        <li
          onClick={() => {
            dispatch(Categories("/womens-bags"));
          }}
        >
          <NavLink to="/product">Women's Bags</NavLink>
        </li>
        <li
          onClick={() => {
            dispatch(Categories("/womens-jewellery"));
          }}
        >
          <NavLink to="/product">Women's Jewellery</NavLink>
        </li>
        <li
          onClick={() => {
            dispatch(Categories("/tops"));
          }}
        >
          <NavLink to="/product">Tops</NavLink>
        </li>
      </ul>
      <ul className="w-auto">
        <li>Men's Collection</li>
        <li
          onClick={() => {
            dispatch(Categories("/mens-shoes"));
          }}
        >
          <NavLink to="/product">Mens Shoes</NavLink>
        </li>
        <li
          onClick={() => {
            dispatch(Categories("/mens-watches"));
          }}
        >
          <NavLink to="/product">Mens-watches</NavLink>
        </li>
        <li
          onClick={() => {
            dispatch(Categories("/mens-shirts"));
          }}
        >
          <NavLink to="/product">Mens Shirts</NavLink>
        </li>
        <li
          onClick={() => {
            dispatch(Categories("/sunglasses"));
          }}
        >
          <NavLink to="/product">Sunglasses</NavLink>
        </li>
      </ul>
      <ul className="w-auto">
        <li>beauty and Others</li>
        <li
          onClick={() => {
            dispatch(Categories("/fragrances"));
          }}
        >
          <NavLink to="/product">Fragrances</NavLink>
        </li>
        <li
          onClick={() => {
            dispatch(Categories("/skincare"));
          }}
        >
          <NavLink to="/product">Skincare</NavLink>
        </li>
      </ul>
      <ul className="w-auto">
        <li>Electronics</li>
        {/* <img className="object-cover" src="./images/bg-6.jpg.webp" alt="" /> */}
        <li
          onClick={() => {
            dispatch(Categories("/smartphones"));
          }}
        >
          <NavLink to="/product">Smartphones</NavLink>
        </li>
        <li
          onClick={() => {
            dispatch(Categories("/laptops"));
          }}
        >
          <NavLink to="/product">Laptops</NavLink>
        </li>
      </ul>
      <ul className="w-auto">
        <li>Home And Furniture</li>
        <li
          onClick={() => {
            dispatch(Categories("/home-decoration"));
          }}
        >
          <NavLink to="/product">Home Decoration</NavLink>
        </li>
        <li
          onClick={() => {
            dispatch(Categories("/furniture"));
          }}
        >
          <NavLink to="/product">Furniture</NavLink>
        </li>
        <li
          onClick={() => {
            dispatch(Categories("/lighting"));
          }}
        >
          <NavLink to="/product">Lighting</NavLink>
        </li>
      </ul>
      <ul className="w-auto">
        <li>Groceries</li>
        <li
          onClick={() => {
            dispatch(Categories("/groceries"));
          }}
        >
          <NavLink to="/product">Groceries</NavLink>
        </li>
      </ul>
      <ul className="w-auto">
        <li>Automobile</li>
        <li
          onClick={() => {
            dispatch(Categories("/automotive"));
          }}
        >
          <NavLink to="/product">Automotive</NavLink>
        </li>
        <li
          onClick={() => {
            dispatch(Categories("/motorcycle"));
          }}
        >
          <NavLink to="/product">Motorcycle</NavLink>
        </li>
      </ul>
    </>
  );
};
