import './Products.css';
import Aside from "./Aside/Aside";
import Categories from "./Categories/Categories";

const Products = (props) => {

    return (
        <div className="Products">
            <Aside dataAside={props.dataProducts.nav.asideLinks}/>
            <Categories dataCategories={props.dataProducts.cards} />
        </div>
    )
}

export default Products;