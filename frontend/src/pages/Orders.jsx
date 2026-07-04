import { useEffect, useState } from "react";
import "./Orders.css";

function Orders() {

    const [orders, setOrders] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {

        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
            return;
        }

        fetch(`http://127.0.0.1:5000/orders/${user.id}`)
            .then((res) => res.json())
            .then((data) => setOrders(data))
            .catch((err) => console.error(err));

    }, []);

    // Search filter
    const filteredOrders = orders.filter((order) =>
        order.game_title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="orders-page">

            <h1>📦 My Orders</h1>

            <input
                type="text"
                placeholder="Search your orders..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="order-search"
            />

            {filteredOrders.length === 0 ? (
                <h2 className="empty-order">No Orders Found</h2>
            ) : (
                <div className="orders-container">

                    {filteredOrders.map((order) => (

                        <div className="order-card" key={order.id}>

                            <h2>{order.game_title}</h2>

                            <p>
                                <strong>Price:</strong> ₹{order.price}
                            </p>

                            <p>
                                <strong>Purchased:</strong> {new Date(order.order_date).toLocaleDateString()}
                            </p>

                            <span className="status">
                                {order.status}
                            </span>

                        </div>

                    ))}

                </div>
            )}

        </div>
    );
}

export default Orders;