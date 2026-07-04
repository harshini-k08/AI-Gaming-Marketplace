import "./FeaturedGames.css";
import GameCard from "../GameCard/GameCard";
import games from "../../data/games";

function FeaturedGames() {
  return (
    <section className="featured">
      <h1>🔥 Featured Games</h1>

      <div className="game-container">
        {games.map((game) => (
   <GameCard
      key={game.id}
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

export default FeaturedGames;