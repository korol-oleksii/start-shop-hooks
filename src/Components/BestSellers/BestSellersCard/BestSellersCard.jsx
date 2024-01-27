import buyCart from "../../../assets/img/buy.svg";
import './BestSellersCard.css';
import {Link, useNavigate} from "react-router-dom";

const BestSellersCard = ({productBest}) => {

    let navigate = useNavigate()
    const showMoreHandler = () => {
        navigate(`/product-info/${productBest.id}`);
    }

    return (
        <div className="BestSellersCard Card">
            <div className="Card__image">
                <Link to={`/product-info/${productBest.id}`} className="Card__image--link">
                    <img src={productBest.image} alt={productBest.title}/>
                </Link>
            </div>
            <div className="Card__meta">
                <div className="Card__cat">
                    <Link to='/products' className="Card__cat--link">
                        {productBest.category}
                    </Link>
                </div>
            </div>
            <div className="Card__desc">
                <Link to={`/product-info/${productBest.id}`} className="Card__desc--link">
                    <span className="Card__title">
                        {productBest.title}
                    </span>
                    <span className="Card__text">
                        {productBest.description}
                    </span>
                </Link>
            </div>
            <div className="Card__price">
                <div className="Card__price--text">
                    ${productBest.price}
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

export default BestSellersCard;