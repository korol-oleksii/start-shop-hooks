import BestSellersCard from "./BestSellersCard/BestSellersCard";
import './BesSellers.css';
import {useEffect, useState} from "react";
import axios from "axios";

const BestSellers = () => {

    const [productsBest, setProductsBest] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => setProductsBest(response.data))
    }, []);

    return (
        <div className="BestSellers content">
            <div className="content__container">
                <div className="content__title">
                    <h2>BestSellers products</h2>
                </div>
                <div className="content__subtitle">
                    Use Free API Products from <a href="https://fakestoreapi.com/products" target="_blank">fakestoreapi.com</a>
                </div>
                <div className="cards">
                    <div className="cards__list">
                        {
                            productsBest.map(productBest => <BestSellersCard productBest={productBest} key={productBest.id}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestSellers;