import './Aside.css';

const Aside = ({dataAside}) => {

    return (
        <aside className="Aside">
            <div className="Aside__title">
                <h3>Category</h3>
            </div>
            <ul className="Aside__list">
                {
                    dataAside.map(link =>
                        <li className="Aside__item" key={link.id}>
                            <a href={link.linkUrl} className="Aside__link">{link.linkName}</a>
                            {/*<button className="Aside__link">{link.linkName}</button>*/}
                        </li>)
                }
            </ul>
        </aside>
    )
}

export default Aside;