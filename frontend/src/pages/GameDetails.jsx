import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import games from "../data/games";
import "./GameDetails.css";
import RecommendedGames from "../components/RecommendedGames/RecommendedGames";
import GameReviews from "../components/GameReviews/GameReviews";

function GameDetails() {
  const { id } = useParams();

  const game = games.find((g) => g.id === Number(id));

  if (!game) {
    return <h2>Game Not Found</h2>;
  }
  const viewed = JSON.parse(localStorage.getItem("recentGames")) || [];

// Remove duplicate if the same game already exists
const updated = viewed.filter(item => item.id !== game.id);

// Add current game at the beginning
updated.unshift(game);

// Keep only the latest 5 games
localStorage.setItem(
    "recentGames",
    JSON.stringify(updated.slice(0, 5))
);

  return (
    <>
      <Navbar />

      <div className="game-details">
       

        <Link to="/games" className="back-btn">
          ← Back to Games
        </Link>

        <div className="details-container">
        <RecommendedGames currentGameId={game.id} />

          <img src={game.image} alt={game.title} />

          <div className="details-info">

            <h1>{game.title}</h1>

            <h2>₹{game.price}</h2>

            <p><strong>⭐ Rating:</strong> {game.rating}</p>

            <p><strong>Category:</strong> {game.category}</p>

            <p><strong>Platform:</strong> {game.platform}</p>

            <p><strong>Developer:</strong> {game.developer}</p>

            <p><strong>Publisher:</strong> {game.publisher}</p>

            <p><strong>Release:</strong> {game.releaseDate}</p>

            <p>{game.description}</p>

            <button className="wishlist-btn">
              ❤️ Add to Wishlist
            </button>

            <button className="cart-btn">
              🛒 Add to Cart
            </button>

          </div>

        </div>
         <GameReviews />
      </div>
    </>
  );
}

export default GameDetails;