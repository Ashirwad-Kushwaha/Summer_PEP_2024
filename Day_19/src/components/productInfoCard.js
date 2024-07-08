import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/appContext";

const ProductInfoCard = (props) => {
    const { data = []} = props;
    const contextData= useContext(AppContext);
    console.log(contextData);
    return (
        <div className="products-info-card">
            <h3>{data.title}</h3>
            <div className="products-card-element">
                {data.map((elem) => {
                    return (<div >
                        <Link to={`/description/${elem.id}`} className="product-card">
                        <img src={elem.thumbnail} alt="" className="product-img"/ >
                        <p>{elem.title}</p>
                        </Link>
                    </div>)
                })}
            </div>
        </div>

    )
}

export default ProductInfoCard;
