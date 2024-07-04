import { useState } from "react";
import CategoryBar from "../components/categoryBar";
import Navbar from "../components/navbar";

const SearchPage = (props) => {

    const customStyle = {
        padding: "48px",
        textAlign: "center",
        backgroundColor: "yellow",
    };

    // let searchText = "";
    const [searchText, setSearchText] = useState();


    console.log("initially", searchText);

    const handleSearch = (e) => {
        const val = e.target.value;
        // searchText = val;
        // console.log(searchText);

        setSearchText(val);
    }

    // let products=[];
    const [products, setProducts] = useState([]);
    async function getData(){
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        console.log(data);
        // products
        setProducts(data.products);
    }


    const {categories} = props;
    return(
        <div>
        <Navbar/>
        <CategoryBar categories = {categories}/>
        <div style={customStyle}>
        <input type="text" onChange={handleSearch}/>
        </div>
        <div style={customStyle}>
        <h1>The search text is : {searchText}</h1>
        <hr />
        <button onClick={getData}>Get Data</button>
        {
            products.map((elem) => {
                return <p>{elem.title}</p>;
            })
        }
        </div>
        </div>
    )
}

export default SearchPage;