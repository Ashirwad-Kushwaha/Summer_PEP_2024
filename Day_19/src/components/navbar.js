import { useContext } from "react";
import { IoSearch } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../context/appContext";

const Navbar = ({openSearchPage})=>{
    const {setSearchText, cart} = useContext(AppContext);
    let {loggedInUser} = useContext(AppContext);

    // console.log(loggedInUser);

    if(loggedInUser===null){
        loggedInUser = {
            name: "Guest"
        }
    }



    const handleSearch = (e)=>{
        setSearchText(e.target.value);
    }

    return(
        <nav>
        <Link to='/' style={{ textDecoration: 'none' }}>
        <h3 id='logo' >amazon.in</h3>
        </Link>
        <p id='location'>Deliver :  <br /> to India</p>
        <div className="search-bar">
            <select name="All" id="" ></select>
            <input type="text" onChange={handleSearch}
            />
            <button id='search-btn' onClick={openSearchPage}><IoSearch />
            </button>
        </div>
        <p id='account'>Hello! <br /> {
            loggedInUser.name
        }</p>
        <Link to='/cart' style={{ textDecoration: 'none' }}>
        <p id='cart' title={JSON.stringify(cart)}>Cart</p>
        </Link>

    </nav>
    )
}

export default Navbar;