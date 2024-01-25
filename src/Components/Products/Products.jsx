import './Products.css';
import Aside from "./Aside/Aside";
import Card from "./Card/Card";

const Products = (props) => {

    return (
        <div className="Products">
            <Aside dataAside={props.dataProducts.nav.asideLinks}/>
            <section className="content">
                <div className="content__container">
                    <div className="content__title">
                        <h2>Our products</h2>
                    </div>
                    <div className="content__subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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
                                          key={product.id}/>)
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Products;