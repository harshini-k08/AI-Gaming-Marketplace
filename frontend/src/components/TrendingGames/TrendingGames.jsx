import "./TrendingGames.css";
import GameCard from "../GameCard/GameCard";
import games from "../../data/games";

function TrendingGames() {
  return (
    <section className="trending">
      <h2>📈 Trending Games</h2>

      <div className="trending-container">
        {games.slice(0, 4).map((game) => (
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

export default TrendingGames;