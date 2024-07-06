import { IoSearch } from "react-icons/io5";

const Navbar = ({setSearchText, openSearchPage})=>{

    const handleSearch = (e)=>{
        setSearchText(e.target.value);
    }

    return(
        <nav>
        <h3 id='logo'>amazon.in</h3>
        <p id='location'>Deliver :  <br /> to India</p>
        <div className="search-bar">
            <select name="All" id="" ></select>
            <input type="text" onChange={handleSearch}
            />
            <button id='search-btn' onClick={openSearchPage}><IoSearch />
            </button>
        </div>
        <p id='account'>Hello! <br /> Ashirwad</p>
        <p id='cart'>Cart</p>

    </nav>
    )
}

export default Navbar;