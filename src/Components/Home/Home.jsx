import './Home.css';
import Card from "./Card/Card";

const Home = (props) => {

    return (
        <div className="Home">
            <section className="content">
                <div className="content__container">
                    <div className="content__title">
                        <h2>New products</h2>
                    </div>
                    <div className="cards">
                        <div className="cards__list">
                            {
                                props.dataProducts.cards.map(product =>
                                    <Card id={product.id} img={product.img}
                                          img2={product.img2}
                                          title={product.title}
                                          category={product.category}
                                          desc={product.desc}
                                          price={product.price}
                                          url={product.url}
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