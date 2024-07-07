import { useEffect, useState } from "react";
import CategoryBar from "../components/categoryBar";
import Navbar from "../components/navbar";
import { useParams } from "react-router-dom";

const ProductDescription = ({ products, categories }) => {
  const { id } = useParams();
  console.log(id);

  // const [product, setProduct] = useState(null);

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
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
                    <p>{elem.price}</p>
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
