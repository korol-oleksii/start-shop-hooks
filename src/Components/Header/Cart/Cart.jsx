import cartIcon from '../../../assets/img/cart.svg';

const Cart = () => {
    return (
        <div className="Cart">
            <div className="Cart__action">
                <button className="button button--cart">
                    <span className="button__icon">
                        <img src={cartIcon} alt="cart"/>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Cart;