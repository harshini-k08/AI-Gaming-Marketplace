import "./Checkout.css";
import { useNavigate, useLocation } from "react-router-dom";

function Checkout() {

    const navigate = useNavigate();
    const location = useLocation();

    // Get cart data from Cart page
    const cart = location.state?.cart || [];

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
            alert("Please login first.");
            return;
        }

        if (cart.length === 0) {
            alert("Your cart is empty.");
            return;
        }

        try {

            for (const game of cart) {

                const response = await fetch("http://127.0.0.1:5000/orders", {

                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({

                        user_id: user.id,
                        game_title: game.title,
                        price: game.price

                    })

                });

                const data = await response.json();
                console.log(data);

            }

            alert("Order placed successfully!");

            navigate("/order-success");

        } catch (error) {

            console.error(error);
            alert("Failed to place order.");

        }
    };

    return (

        <div className="checkout-page">

            <div className="checkout-container">

                <h1>💳 Checkout</h1>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Full Name"
                        required
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        required
                    />

                    <input
                        type="text"
                        placeholder="Phone Number"
                        required
                    />

                    <textarea
                        placeholder="Billing Address"
                        required
                    ></textarea>

                    <select required>

                        <option value="">Select Payment Method</option>

                        <option>UPI</option>

                        <option>Credit Card</option>

                        <option>Debit Card</option>

                        <option>Net Banking</option>

                    </select>

                    <button type="submit">
                        Place Order
                    </button>

                </form>

            </div>

        </div>

    );
}

export default Checkout;