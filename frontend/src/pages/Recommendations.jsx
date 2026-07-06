import { useState } from "react";
import { useNavigate } from "react-router-dom";
import games from "../data/games";
import "./Recommendations.css";

function Recommendations() {

    const navigate = useNavigate();

    const [genre, setGenre] = useState("");
    const [budget, setBudget] = useState("");
    const [rating, setRating] = useState("");

    const [filteredGames, setFilteredGames] = useState(games);

    const findRecommendations = () => {

        let result = [...games];

        if (genre) {
            result = result.filter(
                (game) =>
                    game.category.toLowerCase() ===
                    genre.toLowerCase()
            );
        }

        if (budget) {
            result = result.filter(
                (game) =>
                    game.price <= Number(budget)
            );
        }

        if (rating) {
            result = result.filter(
                (game) =>
                    game.rating >= Number(rating)
            );
        }

        setFilteredGames(result);
    };

    return (
        <div className="recommend-page">

            <h1>🤖 AI Game Recommendation</h1>

            <p className="subtitle">
                Find your perfect game based on your preferences.
            </p>

            <div className="filter-card">

                <select
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                >
                    <option value="">🎮 Select Genre</option>

                    <option value="Action">Action</option>
                    <option value="Adventure">Adventure</option>
                    <option value="RPG">RPG</option>
                    <option value="Sports">Sports</option>
                    <option value="Racing">Racing</option>

                </select>

                <input
                    type="number"
                    placeholder="💰 Maximum Budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                />

                <input
                    type="number"
                    step="0.1"
                    placeholder="⭐ Minimum Rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                />

                <button
                    onClick={findRecommendations}
                >
                    🔍 Find Recommendations
                </button>

            </div>

            <h2>Recommended Games</h2>

            <div className="game-grid">

                {filteredGames.length === 0 ? (

                    <h2>No games found 😔</h2>

                ) : (

                    filteredGames.map((game) => (

                        <div
                            className="game-card"
                            key={game.id}
                        >

                            <img
                                src={game.image}
                                alt={game.title}
                            />

                            <div className="game-info">

                                <h3>{game.title}</h3>

                                <p>{game.description}</p>

                                <div className="details">

                                    <span>
                                        🎮 {game.category}
                                    </span>

                                    <span>
                                        ⭐ {game.rating}
                                    </span>

                                </div>

                                <div className="bottom">

                                    <h4>
                                        ₹{game.price}
                                    </h4>

                                    <button
                                        className="buy-btn"
                                        onClick={() => navigate(`/game/${game.id}`)}
                                    >
                                        Buy →
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))

                )}

            </div>

        </div>
    );
}

export default Recommendations;