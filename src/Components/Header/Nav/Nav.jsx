import './Nav.css';
import {NavLink} from "react-router-dom";

const Nav = (props) => {
    return (
        <nav className="header__nav nav">
            <ul className="nav__list">
                {
                    props.dataNav.navLinks.map(link =>
                        <li className="nav__item" key={link.id}>
                            <NavLink to={link.linkUrl}
                                     className={({isActive, isPending, isClass}) =>
                                         [
                                             isPending ? "pending" : "",
                                             isActive ? "active" : "",
                                             isClass ? "" : "nav__link",
                                         ].join(" ")
                                     }>
                                {link.linkName}
                            </NavLink>
                        </li>)
                }
            </ul>
        </nav>
    )
}

export default Nav;