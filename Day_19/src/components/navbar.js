import { IoSearch } from "react-icons/io5";

const Navbar = ()=>{
    return(
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
    )
}

export default Navbar;