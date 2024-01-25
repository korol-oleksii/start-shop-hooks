import './Logo.css';

const Logo = (props) => {
    return (
        <div className="header__logo logo">
            <a href="../.." className="logo__link">
                <img src={props.dataLogo.logo} className="logo__img" alt="logo company"/>
                <span className="logo__slug">
                    Your journey
                </span>
            </a>
        </div>
    )
}

export default Logo;