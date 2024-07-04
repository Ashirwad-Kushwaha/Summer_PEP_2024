import '../../globalStyle.css';
import CategoryBar from '../components/categoryBar';
import Navbar from '../components/navbar';
import ProductInfoCard from "../components/productInfoCard";


const HomePage = (props) => {

    const { productInfoCards, categories} = props;
    return (
        <div className='homepage-root-container'>
        <Navbar/>
        <CategoryBar categories={categories}/>
        <div className="homepage-body">
            <img src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg" alt="" id="homepage-img"/>

                <div className="products-card-container">
                {productInfoCards.map((elem) => {
                    return <ProductInfoCard
                    title = {elem.title} products = {elem.products}
                    />
                })}
                </div>
            </div>
        </div>
    )
}


export default HomePage;