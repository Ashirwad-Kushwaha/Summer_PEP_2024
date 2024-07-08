import { useEffect, useState } from "react";
import CategoryBar from "../components/categoryBar";
import Navbar from "../components/navbar";

import { useNavigate } from "react-router-dom";
import useGetProducts from "../hooks/useGetProducts";

const SearchPage = (props) => {
    const {categories, searchText, setSearchText} = props;

    const navigate = useNavigate();
    const products = useGetProducts(searchText);
    // console.log(searchText)



    const opendescriptionpage = (id) => {
        navigate(`/description/${id}`);
    };

    return(
        <>
        <Navbar setSearchText={setSearchText}/>
        <CategoryBar/>
        
        <div className="search-page">
        <h1>The search text is : {searchText}</h1>
        <hr />
        <div className="search-elements">
        {
            products.map((elem) => {
                return (<div key={elem.id} className="product-card-search" onClick={()=>opendescriptionpage(elem.id)}>
                    <img src={elem.thumbnail} alt="" />
                    <p>{elem.title}</p>
                    <p>${elem.price}</p>
                    <button>Add to Cart</button>
                    </div>)

                    })
        }
        </div>
        </div>
        </>
    )
}

export default SearchPage;