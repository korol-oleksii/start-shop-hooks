import buyCart from "../../../assets/img/buy.svg";
import {Link, useNavigate} from "react-router-dom";

const BestSellersProducts = ({productBestHome}) => {

    let navigate = useNavigate()
    const showMoreHandler = () => {
        navigate(`/product-info/${productBestHome.id}`);
    }

    return (
        <div className="BestSellersProducts Card">
            <div className="Card__image">
                <Link to={`/product-info/${productBestHome.id}`} className="Card__image--link">
                    <img src={productBestHome.image} alt={productBestHome.title}/>
                </Link>
            </div>
            <div className="Card__meta">
                <div className="Card__cat">
                    <Link to='/products' className="Card__cat--link">
                        {productBestHome.category}
                    </Link>
                </div>
            </div>
            <div className="Card__desc">
                <Link to={`/product-info/${productBestHome.id}`} className="Card__desc--link">
                    <span className="Card__title">
                        {productBestHome.title}
                    </span>
                    <span className="Card__text">
                        {productBestHome.description}
                    </span>
                </Link>
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
                <button onClick={showMoreHandler}>Show more...</button>
            </div>
        </div>
    )
}

export default BestSellersProducts;