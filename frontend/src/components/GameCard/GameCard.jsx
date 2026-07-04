import "./GameCard.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";

import { CartContext } from "../../context/CartContext";

function GameCard({
  id,
  title,
  price,
 rating,
  image,
  category,
  developer,
  description,
}) {
  const { addToWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  const game = {
    id,
    title,
    price,
    rating,
    image,
    category,
    developer,
    description,
  };

  return (
    <div className="game-card">
      <img src={image} alt={title} />

      <div className="game-info">
        <h3>{title}</h3>

        <p className="rating">⭐ {rating}</p>

        <h4>₹{price}</h4>

        <div className="card-buttons">

          <button
            className="wishlist-btn"
            onClick={() => addToWishlist(game)}
          >
            ❤️ Wishlist
          </button>
          <button
  className="cart-btn"
  onClick={() => addToCart(game)}
>
  🛒 Add to Cart
</button>

          <Link to={`/game/${id}`} className="details-link">
  <button className="details-btn">
    👁 View Details →
  </button>
</Link>

        </div>
      </div>
    </div>
  );
}

export default GameCard;