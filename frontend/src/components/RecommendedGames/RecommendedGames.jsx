import GameCard from "../GameCard/GameCard";
import games from "../../data/games";
import "./RecommendedGames.css";

function RecommendedGames({ currentGameId }) {
  const recommended = games
    .filter((game) => game.id !== currentGameId)
    .slice(0, 3);

  return (
    <section className="recommended-games">
      <h2>🎮 Recommended Games</h2>

      <div className="recommended-grid">
        {recommended.map((game) => (
          <GameCard
    id={game.id}
    title={game.title}
    price={game.price}
    rating={game.rating}
    image={game.image}
    category={game.category}
    developer={game.developer}
    description={game.description}
/>
        ))}
      </div>
    </section>
  );
}

export default RecommendedGames;