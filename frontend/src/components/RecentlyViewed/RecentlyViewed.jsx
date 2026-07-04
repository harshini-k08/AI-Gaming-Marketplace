import { Link } from "react-router-dom";

function RecentlyViewed() {

    const games =
        JSON.parse(localStorage.getItem("recentGames")) || [];

    if (games.length === 0) return null;

    return (

        <div className="featured-section">

            <h2>🕒 Recently Viewed</h2>

            <div className="games-grid">

                {games.map((game) => (

                    <div className="game-card" key={game.id}>

                        <img src={game.image} alt={game.title} />

                        <h3>{game.title}</h3>

                        <h4>₹{game.price}</h4>

                        <Link to={`/game/${game.id}`}>
                            <button>View Details</button>
                        </Link>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default RecentlyViewed;