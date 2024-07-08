import { useContext, useEffect, useState } from "react";
import CategoryBar from "../components/categoryBar";
import Navbar from "../components/navbar";
import { useNavigate, useParams } from "react-router-dom";
import useGetProductById from "../hooks/useGetProductById";
import AppContext from "../context/appContext";

const ProductDescription = () => {

  const {setSearchText} = useContext(AppContext);
  const params = useParams();

  const navigate = useNavigate();

  const openSearchPage = () => {
    navigate("/search");
};

const elem = useGetProductById(params.id);

  // if (!products) {
  //   return <div>Loading...</div>;
  // }


  return (
    <>
      <Navbar setSearchText={setSearchText} openSearchPage={openSearchPage}/>
      <CategoryBar/>
      <div className="productView">
              <div key={elem.id} className="productDescriptionView">
                <div className="productImage">
                  <img src={elem.thumbnail} alt="" />
                  <p>{elem.description}</p>
                </div>
                <div className="productDetails">
                  <h1>{elem.title}</h1>
                  <p className="brand">Brand: {elem.brand}</p>
                  <p>Ratings: {elem.rating} ⭐ </p>
                  
                  <div className="productPrice">
                    <p className="discount">-{elem.discountPercentage}%</p>
                    <p>${elem.price}</p>
                  </div>
                  <p><s>${Math.round((elem.price)/(1-(elem.discountPercentage/100))).toFixed(2)}</s></p>
                  
                  <p> Stock: {elem.stock}</p>
                  <div className="productbtn">
                    <button className="cartbtn">Add to Cart</button>
                    <button className="buybtn">Buy Now</button>
                  </div>
                </div>
              </div>
      </div>
    </>
  );
};

export default ProductDescription;
