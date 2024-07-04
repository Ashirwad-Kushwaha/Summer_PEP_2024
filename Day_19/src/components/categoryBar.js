import { GiHamburgerMenu } from "react-icons/gi";


const CategoryBar = (props) => {
    const {categories} = props;
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