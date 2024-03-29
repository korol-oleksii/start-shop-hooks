import './PopularCard.css';
import buyCart from '../../../assets/img/buy.svg';
import buyAddCart from '../../../assets/img/cart.svg';
import {useState} from "react";
import {Link} from "react-router-dom";

const PopularCard = ({img, img2, title, category, desc, price}) => {

    const [photo, setPhoto] = useState(img);

    const setChangePhotoHandler = () => {
        setPhoto(img2);
        if (photo === img2) {
            setPhoto(img);
        }
    }

    return (
        <div className="Card">
            <div className="Card__image">
                <Link to="/products" className="Card__image--link">
                    <img src={photo} alt={title}/>
                </Link>
            </div>
            <div className="Card__meta">
                <div className="Card__cat">
                    <a href="#cat" className="Card__cat--link">
                        {category}
                    </a>
                </div>
            </div>
            <div className="Card__desc">
                <Link to="/products" className="Card__desc--link">
                    <span className="Card__title">
                        {title}
                    </span>
                    <span className="Card__text">
                        {desc}
                    </span>
                </Link>
            </div>
            <div className="Card__price">
                <div className="Card__price--text">
                    ${price}
                </div>
                <div className="Card__price--buy">
                    <button className="button button--buy">
                        <span className="button__icon">
                            <img src={buyCart} alt="buy"/>
                        </span>
                    </button>
                </div>
            </div>
            <div className="change-photo-action">
                <button onClick={setChangePhotoHandler}>Change photo</button>
            </div>
        </div>
    )
}

export default PopularCard;