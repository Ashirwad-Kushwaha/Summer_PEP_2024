import ReactDOM from 'react-dom/client';
import "./globalStyle.css";
import HomePage from './src/pages/homePage';
import SearchPage from './src/pages/amazonSearchPage';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import { useEffect, useState } from 'react';
import ProductDescription from './src/pages/productDescription';
import AppContext from './src/context/appContext';
import SignUp from './src/pages/signUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './src/pages/login';

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const categories = ["Fresh", "Amazon Mini Tv", "Sell", "Best Sellers", "Electronics", "Books", "Prime", "Fashion", "Home", "Mobiles", "Grocery", "Appliances", "Baby", "Toys", "Deals", "Food"];

// const productInfoCards = [
//     {
//         id  :1,
//         title: "Refresh your space",
//         products: [
//             {
//                 title: "Dining",
//                 img: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_LP-HP_B08MYX5Q2W_01.23._SY116_CB619238939_.jpg",
//             },
//             {
//                 title: "Home",
//                 img : "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg",
//             },
//             {
//                 title: "Kitchen",
//                 img: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg",
//             },
//             {
//                 title: "Health and Beauty",
//                 img: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg",
//             }

//         ],
//     },
//     {
//         id  :2,
//         title: "Electronics",
//         products: [
//             {
//                 title: "Home",
//                 img: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg",
//             },
//             {
//                 title: "Kitchen",
//                 img: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg",
//             },
//             {
//                 title: "Health and Beauty",
//                 img: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg",
//             }
//         ],
//     },
//     {
//         id  :3,
//         title: "Books",
//         products: [
//             {
//                 title: "Home",
//                 img: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg",
//             },
//             {
//                 title: "Kitchen",
//                 img: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg",
//             },
//             {
//                 title: "Health and Beauty",
//                 img: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg",
//             }
//         ],
//     },
// ];




const App = () => {
    // console.log(searchText)

    const [searchText, setSearchText] = useState("");
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage/>
        },
        {
            path: "/search",
            element: <SearchPage/>
        },
        {
            path: "/description/:id",
            element: <ProductDescription/>
        },
        {
            path: "/signup",
            element: <SignUp/>
        },
        {
            path: "/login",
            element: <Login/>
        }
    ])

    const [cart, setCart] = useState([]);
    const addToCart = (elem) => {
        const isPresent = cart.findIndex((cI) => cI.id === elem.id);
        if(isPresent === -1){
            const newCart = [...cart];
            newCart.push({
                title: elem.title,
                img: elem.thumbnail,
                price: elem.price,
                id: elem.id,
                count:1,
            });
            setCart(newCart);
        } else{
            const newCart = cart.map((cartItem) =>{
                if(cartItem.id === elem.id){
                    const newCartItem = {...cartItem};
                    newCartItem.count = newCartItem.count + 1;
                    return newCartItem;
                } else return cartItem;
        })
        setCart(newCart);
        }

    }

    console.log(cart);

    const contextValues = {
        cart,
        addToCart,
        searchText,
        setSearchText,
        categories
    }

    return (
        <>
        <AppContext.Provider value={contextValues}>
        <RouterProvider router={router} />
        </AppContext.Provider>
        </>
    );
};

root.render(
    <>
    <App/>
    <ToastContainer/>
    </>
);