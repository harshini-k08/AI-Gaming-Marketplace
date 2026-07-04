import { Link } from "react-router-dom";
import "./OrderSuccess.css";

function OrderSuccess() {
  return (
    <div className="success-page">
      <div className="success-box">
        <h1>🎉 Order Placed Successfully!</h1>

        <p>
          Thank you for purchasing from AI Gaming Marketplace.
        </p>

        <p>Your order has been received.</p>

        <Link to="/games">
          <button className="continue-btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OrderSuccess;