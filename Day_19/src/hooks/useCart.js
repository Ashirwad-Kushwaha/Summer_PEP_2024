import { useContext } from "react";
import AppContext from "../context/appContext";

const useCart = () => {
  const { cart, loggenInUser } = useContext(AppContext);
  console.log("here in cart" + cart);
  const cartdb = async (productId, quantity) => {
    try {
      const URL = "http://localhost:1400/api/v1/cart";
      const OPTIONS = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, productId, quantity }),
      };

      const res = await fetch(URL, OPTIONS);
      console.log(res);
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to add to cart");
      }
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error("Error during adding to cart:", error);
      if (error.message) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong during adding to cart");
      }
    }
  };

  return cartdb;
};

export default useCart;
