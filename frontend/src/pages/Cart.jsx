import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";
import { Link } from "react-router-dom";

function Cart() {

  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">

      <h1>🛒 My Cart</h1>

      {cart.length === 0 ? (
        <h2>Your cart is empty.</h2>
      ) : (
        <>
          {cart.map((game) => (
            <div className="cart-item" key={game.id}>

              <img src={game.image} alt={game.title} />

              <div className="cart-details">

                <h2>{game.title}</h2>

                <h3>₹{game.price}</h3>

                <div className="quantity-box">

                  <button onClick={() => decreaseQuantity(game.id)}>
                    -
                  </button>

                  <h3>{game.quantity}</h3>

                  <button onClick={() => increaseQuantity(game.id)}>
                    +
                  </button>

                </div>

                <h3>
                  Subtotal ₹{game.price * game.quantity}
                </h3>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(game.id)}
                >
                  Remove
                </button>

                <br /><br />

                <Link
                  to="/checkout"
                  state={{ cart }}
                >
                  <button className="checkout-btn">
                    Proceed to Checkout
                  </button>
                </Link>

              </div>

            </div>
          ))}

          <div className="summary">

            <h2>Order Summary</h2>

            <h3>Games : {cart.length}</h3>

            <h2>Total : ₹{total}</h2>

            <Link
              to="/checkout"
              state={{ cart }}
            >
              <button className="checkout-btn">
                Proceed to Checkout
              </button>
            </Link>

          </div>
        </>
      )}

    </div>
  );
}

export default Cart;