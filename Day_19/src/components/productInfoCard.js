
const ProductInfoCard = (obj) => {
    console.log(obj);
    return (
        <div className="products-info-card">
            <h3>{obj.title}</h3>
            <div className="products-card-element">
                {obj.products.map((elem) => {
                    return (<div className="product-card">
                        <img src={elem.img} alt="" />
                        <p>{elem.title}</p>
                    </div>)
                })}
            </div>
        </div>

    )
}

export default ProductInfoCard;
