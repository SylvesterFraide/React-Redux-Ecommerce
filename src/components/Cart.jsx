import { useDispatch, useSelector } from "react-redux";
import cartSlice,
{
    addToCart,
    clearCart,
    decreaseCart,
    getTotals,
    removeFromCart
} from "../features/cartSlice";
import { Link } from "react-router-dom";
import { useEffect } from "react";


const Cart = () => {
    const cart = useSelector((state) => state.cart)
    const dispath = useDispatch();

    useEffect(() => {
        dispath(getTotals());
    }, [cart, dispath])

    const handleRemoveFromCart = (cartItem) => {
        dispath(removeFromCart(cartItem))
    }

    const handeDereaseCart = (cartItem) => {
        dispath(decreaseCart(cartItem))
    }

    const handleIncreaseCart = (cartItem) => {
        dispath(addToCart(cartItem))
    }

    const handleClearCart = () => {
        dispath(clearCart())
    }

    return (
        <div className="cart-container">
            <h2>shopping cart</h2>
            {cart.cartItems.length === 0 ? (
                <div className="cart-empty">
                    <h3>Your cart is currently empty</h3>

                    <div className="start-shopping">
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                fill="currentColor"
                                className="bi bi-arrow-left"
                                viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5
                                     0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                            </svg>
                            <span>Start Shopping</span>
                        </Link>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="titles">
                        <h3 className="product-title">Product</h3>
                        <h3 className="price">Price</h3>
                        <h3 className="quantity">Quantity </h3>
                        <h3 className="total">Total</h3>
                    </div>
                    <div className="cart-items">
                        {cart.cartItems.map(cartItem => (
                            <div className="cart-item" key={cartItem.id}>
                                <div className="cart-product">
                                    <img src={cartItem.image} alt={cartItem.name} />
                                    <div>
                                        <h4>{cartItem.name}</h4>
                                        <button onClick={() => handleRemoveFromCart(cartItem)}>Remove</button>
                                    </div>
                                </div>

                                <div className="cart-product-price">
                                    Ksh. {cartItem.price}
                                </div>

                                <div className="cart-product-quantity">
                                    <button onClick={() => handeDereaseCart(cartItem)} >-</button>
                                    <div className="count">{cartItem.cartQuantity}</div>
                                    <button onClick={() => handleIncreaseCart(cartItem)}>+</button>
                                </div>

                                <div className="cart-item-total">
                                    Ksh.{cartItem.price * cartItem.cartQuantity}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summery">
                        <button className="clear-cart" onClick={() => handleClearCart()}>Clear</button>
                        <div className="cart-checkout">
                            <div className="subtotal">
                                <span>Subtotal</span>
                                <span className="amount">Ksh.{cart.cartTotalAmount}</span>
                            </div>
                            <p>Taxes and shipping calculated at the checkout</p>

                            <div className="continue-shopping">
                                <Link to="/">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        fill="currentColor"
                                        className="bi bi-arrow-left"
                                        viewBox="0 0 16 16">
                                        <path fillRule="evenodd"
                                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5
                                              0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                                    </svg>
                                    <span>Continue Shopping</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Cart;