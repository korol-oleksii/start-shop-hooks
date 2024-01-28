import './ProductInfo.css';
import buyIcon from '../../assets/img/buy.svg'
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import Reviews from "../Reviews/Reviews";

const ProductInfo = () => {

    // Sticky title
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    const isSticky = (e) => {
        const headProductTitle = document.querySelector('.product-info__head--title');
        const scrollTop = window.scrollY;
        scrollTop >= 200 ? headProductTitle.classList.add('is-sticky') : headProductTitle.classList.remove('is-sticky');
    };

    //set data
    const [productsInfo, setProductsInfo] = useState({});

    let {productId} = useParams();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(response => setProductsInfo(response.data))
    }, []);

    //add count to amount
    const [amount, setAmount] = useState(1);

    useEffect(() => {
        if (amount < 1) {
            setAmount(1);
        }
    }, [amount]);

    let amountDecrementHandler = () => {
        return (
            setAmount(amount - 1)
        )
    }
    let amountIncrementHandler = () => {
        return (
            setAmount(amount + 1)
        )
    }
    let amountInputHandler = (e) => {
        setAmount(e.target.value)
    }

    let navigate = useNavigate();
    let linkBackPageHandler = () => {
        navigate('/bestsellers');
    }

    return (
        <div className="ProductInfo product-info">
            <div className="product-info__container mesh--cell">
                <div className="product-info__row mesh--cell">
                    <div className="product-info__head">
                        <div className="product-info__head--back">
                            <button onClick={linkBackPageHandler}>&larr; Go to BestSellers</button>
                        </div>
                        <div className="product-info__head--title mesh--row mesh--row-v-center">
                            <h2>{productsInfo.title}</h2>
                            <div className="product-info__head--code">
                                <span className="text-label">Code product:</span>
                                <span className="text-code">{productsInfo.id}</span>
                            </div>
                        </div>
                        <div className="product-info__box--cat">
                            <span className="text-label">Category:</span>
                            <span className="text-category">{productsInfo.category}</span>
                        </div>
                    </div>
                </div>
                <div className="product-info__row mesh--row">
                    <div className="product-info__cover">
                        <img src={productsInfo.image} alt={productsInfo.title}/>
                    </div>
                    <div className="product-info__box mesh--cell" data-flex="1">
                        <div className="product-info__box--row product-info__box--prices">
                            <div className="product-info__box--price mesh--cell">
                                <div className="text-price">${productsInfo.price}</div>
                                <div className="product-info__box--action mesh--row mesh--row-v-center">
                                    <div className="product-info__box--amount">
                                        <button className="button button--decrement" onClick={amountDecrementHandler}>
                                            <span className="button__text">
                                                &ndash;
                                            </span>
                                        </button>
                                        <input className="input input-amount" type="text" onChange={amountInputHandler} value={amount}/>
                                        <button className="button button--increment" onClick={amountIncrementHandler}>
                                            <span className="button__text">
                                                +
                                            </span>
                                        </button>
                                    </div>
                                    <button className="button product-info__box--buy">
                                        <span className="button__body mesh--row mesh--row-v-center">
                                            <span className="button__icon">
                                            <img src={buyIcon} alt="buy"/>
                                            </span>
                                            <span className="button__text">
                                                Buy
                                            </span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="product-info__box--row product-info__box--desc">
                            <div className="text">{productsInfo.description}</div>
                        </div>

                        {/*<div className="product-info__box--row product-info__box--rang">
                            <span className="text-label">Rating:</span>
                            <span className="text-rang">{productsInfo.rating.rate} / 5</span>
                        </div>*/}

                        <div className="product-info__box--row product-info__box--reviews">
                            <Reviews/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo;