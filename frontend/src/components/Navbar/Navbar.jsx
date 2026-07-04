import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaSearch, FaHeart, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import { CartContext } from "../../context/CartContext";
import ProfileMenu from "../ProfileMenu/ProfileMenu";

function Navbar() {
  const { wishlist } = useContext(WishlistContext);
  const { cart } = useContext(CartContext);
  return (
    <nav className="navbar">
      <div className="logo">
        🎮 AI Gaming Marketplace
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/games">Games</Link></li>
        <li><Link to="/wishlist" className="nav-icon">
    <FaHeart />
    {wishlist.length > 0 && (
        <span className="badge">{wishlist.length}</span>
    )}
</Link></li>
        <li><Link to="/cart" className="nav-icon">
    <FaShoppingCart />
    {cart.length > 0 && (
        <span className="badge">{cart.length}</span>
    )}
</Link></li>
      </ul>
      <Link to="/login">
    👤 Login
</Link>
<Link to="/recommendations">AI Recommend</Link>
<Link to="/ai-chat">AI Assistant</Link>
<Link to="/orders">
    My Orders
</Link>
<Link to="/profile" className="nav-icon">
    <FaUserCircle />
</Link>

      
    </nav>
  );
}

export default Navbar;