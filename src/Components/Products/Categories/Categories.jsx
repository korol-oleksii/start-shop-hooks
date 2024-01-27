import DataCard from "./DataCard/DataCard";

const Categories = (props) => {
    return (
        <div className='Categories content'>
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
                                props.dataCategories.map(product =>
                                    <DataCard id={product.id} img={product.img}
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
        </div>
    )
}

export default Categories;