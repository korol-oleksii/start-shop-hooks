import buyCart from "../../../assets/img/buy.svg";

const BestSellersProducts = ({productBestHome}) => {
    return (
        <div className="BestSellersProducts Card">
            <div className="Card__image">
                <a className="Card__image--link">
                    <img src={productBestHome.image} alt={productBestHome.title}/>
                </a>
            </div>
            <div className="Card__meta">
                <div className="Card__cat">
                    <a href="#cat" className="Card__cat--link">
                        {productBestHome.category}
                    </a>
                </div>
            </div>
            <div className="Card__desc">
                <a className="Card__desc--link">
                    <span className="Card__title">
                        {productBestHome.title}
                    </span>
                    <span className="Card__text">
                        {productBestHome.description}
                    </span>
                </a>
            </div>
            <div className="Card__price">
                <div className="Card__price--text">
                    ${productBestHome.price}
                </div>
                <div className="Card__price--buy">
                    <button className="button button--buy">
                        <span className="button__icon">
                            <img src={buyCart} alt="buy"/>
                        </span>
                    </button>
                </div>
            </div>
            <div className="Card__more">
                <button>Show more...</button>
            </div>
        </div>
    )
}

export default BestSellersProducts;