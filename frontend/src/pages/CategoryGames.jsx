import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import GameCard from "../components/GameCard/GameCard";
import games from "../data/games";

function CategoryGames() {

  const { category } = useParams();

  const filteredGames = games.filter(
    (game) =>
      game.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <>
      <Navbar />

      <div className="games-page">

        <h1>{category} Games</h1>

        <div className="game-container">

          {filteredGames.length > 0 ? (
            filteredGames.map((game) => (
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
            ))
          ) : (
            <h2>No games found.</h2>
          )}

        </div>

      </div>
    </>
  );
}

export default CategoryGames;