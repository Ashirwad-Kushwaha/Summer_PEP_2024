import { useContext} from "react";
import CategoryBar from "../components/categoryBar";
import Navbar from "../components/navbar";

import { useNavigate } from "react-router-dom";
import useGetProducts from "../hooks/useGetProducts";
import AppContext from "../context/appContext";

const SearchPage = (props) => {
    const {categories} = props;


    const navigate = useNavigate();
    const products = useGetProducts();
    // console.log(searchText)

    const {addToCart} = useContext(AppContext);



    const opendescriptionpage = (id) => {
        navigate(`/description/${id}`);
    };

    return(
        <>
        <Navbar/>
        <CategoryBar categories={categories}/>
        
        <div className="search-page">
        <hr />
        <div className="search-elements">
        {
            products.map((elem) => {
                return (<div key={elem.id} className="product-card-search" onClick={()=>opendescriptionpage(elem.id)}>
                    <img src={elem.thumbnail} alt="" />
                    <p>{elem.title}</p>
                    <p>${elem.price}</p>
                    <button onClick={() => addToCart(elem)}>Add to Cart</button>
                    </div>)

                    })
        }
        </div>
        </div>
        </>
    )
}

export default SearchPage;