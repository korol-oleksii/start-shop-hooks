import './Aside.css';
import {NavLink} from "react-router-dom";

const Aside = ({dataAside}) => {

    return (
        <aside className="Aside">
            <div className="Aside__body">
                <div className="Aside__row Aside-category">
                    <div className="Aside__title">
                        <h3>Category</h3>
                    </div>
                    <ul className="Aside__list">
                        {
                            dataAside.map(link =>
                                <li className="Aside__item" key={link.id}>
                                    <NavLink to={link.linkUrl} className="Aside__link">{link.linkName}</NavLink>
                                    {/*<button className="Aside__link">{link.linkName}</button>*/}
                                </li>)
                        }
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default Aside;