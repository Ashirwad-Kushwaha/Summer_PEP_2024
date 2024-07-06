import { useEffect, useState } from "react";
import CategoryBar from "../components/categoryBar"
import Navbar from "../components/navbar"
import { useParams } from "react-router-dom";

const ProductDescription = ({products}) => {
    const { id } = useParams();
    console.log(id)

    // const [product, setProduct] = useState(null);


    if (!products) {
        return <div>Loading...</div>;
    }
    
    return (
        <>
        {
            products.map((elem) => {
                if(elem.id == id){
                    return (
                        <div>
                            <h1>{elem.title}</h1>
                            <img src={elem.thumbnail} alt="" />
                            <p>{elem.description}</p>
                        </div>
                    )
                }
            })
        } 
        </>
    );
};

export default ProductDescription