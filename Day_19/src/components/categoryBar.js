import { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import AppContext from "../context/appContext";


const CategoryBar = () => {
    const {categories} = useContext(AppContext);
  return (
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
  )
}

export default CategoryBar;