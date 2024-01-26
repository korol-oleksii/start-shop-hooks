import './Home.css';
import Card from "./Card/Card";
import {useState} from "react";

const Home = (props) => {

    let countsProducts = 4;

    return (
        <div className="Home">
            <section className="content">
                <div className="content__container">
                    <div className="content__title">
                        <h2>Popular products <span className="icon-info" data-hint="from data.js">i</span></h2>
                    </div>
                    <div className="cards">
                        <div className="cards__list">
                            {
                                props.dataProducts.cards.slice(0,countsProducts).map(product =>
                                    <Card id={product.id} img={product.img}
                                          img2={product.img2}
                                          title={product.title}
                                          category={product.category}
                                          desc={product.desc}
                                          price={product.price}
                                          key={product.id}/>)
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;