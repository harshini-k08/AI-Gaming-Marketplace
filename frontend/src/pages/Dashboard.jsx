import "./Dashboard.css";
import { Navigate } from "react-router-dom";




function Dashboard() {
    const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
  return <Navigate to="/login" />;
}
    
    <h1>
  Welcome, {user?.name}
</h1>
const handleLogout = () => {
  localStorage.removeItem("user");
  window.location.href = "/login";
};
<button onClick={handleLogout}>
  Logout
</button>
  return (
    
    <div className="dashboard">

      <h1>👤 Welcome, Harshini</h1>

      <div className="stats">

        <div className="card">
          <h2>📦 Orders</h2>
          <p>5</p>
        </div>

        <div className="card">
          <h2>❤️ Wishlist</h2>
          <p>12</p>
        </div>

        <div className="card">
          <h2>🛒 Cart</h2>
          <p>2</p>
        </div>

      </div>

      <div className="recent">

        <h2>Recent Orders</h2>

        <div className="order">
          Cyberpunk 2077
          <span>Completed</span>
        </div>

        <div className="order">
          Elden Ring
          <span>Completed</span>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;