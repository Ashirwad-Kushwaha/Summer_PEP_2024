import ReactDOM from 'react-dom/client';
import "./globalStyle.css";
import HomePage from "./src/pages/homePage";
import SearchPage from './src/pages/amazonSearchPage';



const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const categories = ["Fresh", "Amazon Mini Tv", "Sell", "Best Sellers", "Electronics", "Books", "Prime", "Fashion", "Home", "Mobiles", "Grocery", "Appliances", "Baby", "Toys", "Deals", "Food"];

const productInfoCards = [
    {
        id  :1,
        title: "Refresh your space",
        products: [
            {
                title: "Dining",
                img: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_LP-HP_B08MYX5Q2W_01.23._SY116_CB619238939_.jpg",
            },
            {
                title: "Home",
                img : "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg",
            },
            {
                title: "Kitchen",
                img: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg",
            },
            {
                title: "Health and Beauty",
                img: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg",
            }

        ],
    },
    {
        id  :2,
        title: "Electronics",
        products: [
            {
                title: "Home",
                img: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg",
            },
            {
                title: "Kitchen",
                img: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg",
            },
            {
                title: "Health and Beauty",
                img: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg",
            }
        ],
    },
    {
        id  :3,
        title: "Books",
        products: [
            {
                title: "Home",
                img: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg",
            },
            {
                title: "Kitchen",
                img: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg",
            },
            {
                title: "Health and Beauty",
                img: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg",
            }
        ],
    },
];

const App = () => {
    return (
        <div>
           {/*<HomePage 
            productInfoCards = {productInfoCards}
           categories = {categories}
           />*/}
        {<SearchPage categories = {categories}/>}
        </div>
    );
};

root.render(App());