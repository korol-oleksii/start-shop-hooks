import './Home.css';
import PopularCard from "./PopularCard/PopularCard";
import {useEffect, useState} from "react";
import axios from "axios";
import BestSellersProducts from "./BestSellersProducts/BestSellersProducts";

const Home = (props) => {

    let countsProducts = 4;

    const [productsBestHome, setProductsBestHome] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => setProductsBestHome(response.data))
    }, []);

    return (
        <div className="Home">
            <div className="Home__container">
                <div className="content">
                    <section className="content__row">
                        <div className="content__title">
                            <h2>Popular products <span className="icon-info" data-hint="from data.js">i</span></h2>
                        </div>
                        <div className="cards cards-default">
                            <div className="cards__list">
                                {
                                    props.dataProducts.cards.slice(0, countsProducts).map(product =>
                                        <PopularCard id={product.id} img={product.img} img2={product.img2}
                                                     title={product.title} category={product.category}
                                                     desc={product.desc} price={product.price} key={product.id}/>)
                                }
                            </div>
                        </div>
                    </section>
                    <section className="content__row">
                        <div className="content__title">
                            <h2>BestSellers products <span className="icon-info" data-hint="use API Products">i</span>
                            </h2>
                        </div>
                        <div className="cards">
                            <div className="cards__list">
                                {
                                    productsBestHome.length > 0 ? productsBestHome.slice(0, countsProducts).map(productBestHome =>
                                            <BestSellersProducts productBestHome={productBestHome}
                                                                 key={productBestHome.id}/>) : <div className="loading"></div>
                                }
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Home;