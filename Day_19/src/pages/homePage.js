import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import ProductInfoCard from "../components/productInfoCard";



const categories = ["Fresh", "Amazon Mini Tv", "Sell", "Best Sellers", "Electronics", "Books", "Prime", "Fashion", "Home", "Mobiles", "Grocery", "Appliances", "Baby", "Toys", "Deals", "Food"];

const productInfoCards = [
    {
        id  :1,
        title: "Revamp",
        products: [
            {
                title: "Cushion",
                img: "https://images-eu.ssl-images-amazon.com/images/I/41xw%2Bk%2Bqy%2BL._SY300_SX300_QL70_FMwebp_.jpg",
            },
        ],
    },
];

const HomePage = () => {
    return (
        <div className='homepage-root-container'>
            <nav>
                <h3 id='logo'>amazon.in</h3>
                <p id='location'>Deliver :  <br /> to India</p>
                <div className="search-bar">
                    <select name="All" id="" ></select>
                    <input type="text" id='search' />
                    <button id='search-btn'><IoSearch />
                    </button>
                </div>
                <p id='account'>Hello! <br /> Ashirwad</p>
                <p id='cart'>Cart</p>

            </nav>
            <div className="category-bar">
                <button >
                    <GiHamburgerMenu id='ham-menu' />
                    All</button>
                <div className="category-items">
                    {
                        categories.map((elem) => {
                            return <button>{elem}</button>
                        })
                    }
                </div>

            </div>
            <div className="homepage-body">
            <img src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg" alt="" id="homepage-img"/>

                <div className="products-card-container">
                {productInfoCards.map((elem) => {
                    return <ProductInfoCard
                    title = {elem.title}
                    />
                })}
                </div>
            </div>
        </div>
    )
}


export default HomePage;