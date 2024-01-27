import './Logo.css';
import {NavLink} from "react-router-dom";

const Logo = (props) => {
    return (
        <div className="header__logo logo">
            <NavLink to="/" className="logo__link">
                <img src={props.dataLogo.logo} className="logo__img" alt="logo company"/>
                <span className="logo__slug">
                    Your journey
                </span>
            </NavLink>
        </div>
    )
}

export default Logo;