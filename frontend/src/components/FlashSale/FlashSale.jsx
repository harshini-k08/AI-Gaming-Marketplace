import games from "../../data/games";
import "./FlashSale.css";

function FlashSale() {
  const saleGames = games.slice(0, 3);

  return (
    <section className="flash-sale">

      <h2>🔥 Flash Sale</h2>

      <div className="sale-grid">

        {saleGames.map((game) => {

          const originalPrice = game.price;
          const discount = 25;
          const newPrice = Math.floor(
            originalPrice - originalPrice * discount / 100
          );

          return (
            <div className="sale-card" key={game.id}>

              <img src={game.image} alt={game.title} />

              <h3>{game.title}</h3>

              <p className="old-price">
                ₹{originalPrice}
              </p>

              <p className="new-price">
                ₹{newPrice}
              </p>

              <span className="discount">
                -25%
              </span>

            </div>
          );

        })}

      </div>

    </section>
  );
}

export default FlashSale;