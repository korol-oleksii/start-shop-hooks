import React from "react";
import './Header.css';
import Nav from "./Nav/Nav";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import Cart from "./Cart/Cart";

const Header = (props) => {
    return (
        <header className="header">
            <div className="header__body">
                <Logo dataLogo={props.dataHeader}/>
                <Search/>
                <Nav dataNav={props.dataHeader}/>
                <Cart/>
            </div>
        </header>
    )
}

export default Header;