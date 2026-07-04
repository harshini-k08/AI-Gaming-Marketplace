import { useState } from "react";
import games from "../data/games";

function Recommendations() {

  const [genre, setGenre] = useState("");

  const [budget, setBudget] = useState("");

  const [rating, setRating] = useState("");

  const filteredGames = games.filter(game =>

      (genre === "" || game.category === genre) &&

      (budget === "" || game.price <= Number(budget)) &&

      (rating === "" || game.rating >= Number(rating))

  );

  return (

    <div
      style={{
        background:"#0f172a",
        color:"white",
        minHeight:"100vh",
        padding:"40px"
      }}
    >

      <h1>🤖 AI Game Recommendation</h1>

      <br/>

      <select
        value={genre}
        onChange={(e)=>setGenre(e.target.value)}
      >

        <option value="">Select Genre</option>

        <option>Action</option>

        <option>RPG</option>

        <option>Racing</option>

        <option>Adventure</option>

      </select>

      <br/><br/>

      <input

        type="number"

        placeholder="Maximum Budget"

        value={budget}

        onChange={(e)=>setBudget(e.target.value)}

      />

      <br/><br/>

      <input

        type="number"

        placeholder="Minimum Rating"

        value={rating}

        onChange={(e)=>setRating(e.target.value)}

      />

      <hr/>

      <h2>Recommended Games</h2>

      {

        filteredGames.map(game=>(

          <div
            key={game.id}
            style={{
              marginBottom:"20px",
              background:"#1e293b",
              padding:"20px",
              borderRadius:"10px"
            }}
          >

            <h3>{game.title}</h3>

            <p>Category : {game.category}</p>

            <p>Price : ₹{game.price}</p>

            <p>⭐ {game.rating}</p>

          </div>

        ))

      }

    </div>

  );

}

export default Recommendations;