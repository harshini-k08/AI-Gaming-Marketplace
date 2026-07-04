import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";

function Wishlist() {

  const { wishlist, removeFromWishlist } =
    useContext(WishlistContext);

  return (
    <div
      style={{
        color: "white",
        padding: "40px",
        background: "#0f172a",
        minHeight: "100vh",
      }}
    >
      <h1>❤️ My Wishlist</h1>

      {wishlist.length === 0 ? (
        <h2>No games added.</h2>
      ) : (
        wishlist.map((game) => (
          <div
            key={game.id}
            style={{
              background: "#1e293b",
              padding: "20px",
              marginTop: "20px",
              borderRadius: "10px",
            }}
          >
            <h2>{game.title}</h2>

            <p>⭐ {game.rating}</p>

            <p>₹{game.price}</p>

            <button
              onClick={() => removeFromWishlist(game.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Wishlist;