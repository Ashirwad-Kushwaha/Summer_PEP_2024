import '../../globalStyle.css';
import CategoryBar from '../components/categoryBar';
import Navbar from '../components/navbar';
import ProductInfoCard from "../components/productInfoCard";

import { useNavigate } from "react-router-dom";
import useGetProducts from '../hooks/useGetProducts';



const HomePage = () => {
    const navigate = useNavigate();

    const products = useGetProducts();

    let count = 0;
    const reqLength = 16;
    const filteredProducts = products.filter((elem, idx) => {
        if (Math.random() > 0.5 || reqLength - count === products.length - idx) {
            if (count < reqLength) {
                count++;
                return true;
            } else return false;
        } else return false;
    });

    const openSearchPage = () => {
        navigate("/search");
    };

    const dummy = [0, 1, 2, 3]; //[...Array(4).keys()];, 
    return (
        <div className='homepage-root-container'>
            <Navbar openSearchPage={openSearchPage} />
            <CategoryBar />
            <div className="homepage-body">
                <img src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg" alt="" id="homepage-img" />

                <div className="products-card-container">
                    {dummy.map((elem) => {
                        return <ProductInfoCard
                            data={filteredProducts.slice(elem * 4, elem * 4 + 4)}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}


export default HomePage;