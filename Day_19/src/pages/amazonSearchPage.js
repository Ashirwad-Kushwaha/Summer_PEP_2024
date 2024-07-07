import { useEffect, useState } from "react";
import CategoryBar from "../components/categoryBar";
import Navbar from "../components/navbar";

import { useNavigate } from "react-router-dom";

const SearchPage = (props) => {
    const {categories, searchText, setSearchText} = props;

    const navigate = useNavigate();
    
    const [products, setProducts] = useState([]);
    // console.log(searchText)

    async function getData(){
        const res = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
        const data = await res.json();
        console.log(data)
        setProducts(data.products);
        
    }

    useEffect(()=>{
        getData()
    }, [searchText]);

    const opendescriptionpage = (id) => {
        navigate(`/description/${id}`);
    };

    return(
        <>
        <Navbar setSearchText={setSearchText}/>
        <CategoryBar categories = {categories}/>
        
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