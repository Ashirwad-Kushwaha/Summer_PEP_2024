import { useEffect, useState } from "react";
import CategoryBar from "../components/categoryBar";
import Navbar from "../components/navbar";
import { useNavigate, useParams } from "react-router-dom";

const ProductDescription = ({setSearchText, products, categories }) => {
  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();

  const openSearchPage = () => {
    navigate("/search");
};


  if (!products) {
    return <div>Loading...</div>;
  }


  return (
    <>
      <Navbar setSearchText={setSearchText} openSearchPage={openSearchPage}/>
      <CategoryBar categories={categories} />
      <div className="productView">
        {products.map((elem) => {
          if (elem.id == id) {
            return (
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
                  
                  <p> Stock: {elem.stock}</p>
                  <div className="productbtn">
                    <button className="cartbtn">Add to Cart</button>
                    <button className="buybtn">Buy Now</button>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default ProductDescription;
