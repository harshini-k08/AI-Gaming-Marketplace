import { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import SearchBar from "../components/SearchBar/SearchBar";
import GameCard from "../components/GameCard/GameCard";

import games from "../data/games";

import "./Games.css";

function Games() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");

  let filteredGames = games.filter((game) => {
    const matchesSearch = game.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      game.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  filteredGames = [...filteredGames];

  switch (sortOption) {
    case "priceLow":
      filteredGames.sort((a, b) => a.price - b.price);
      break;

    case "priceHigh":
      filteredGames.sort((a, b) => b.price - a.price);
      break;

    case "rating":
      filteredGames.sort((a, b) => b.rating - a.rating);
      break;

    case "newest":
      filteredGames.sort(
        (a, b) => Number(b.releaseDate) - Number(a.releaseDate)
      );
      break;

    default:
      break;
  }

  return (
    <>
      <Navbar />

      <div className="games-page">
        <h1>🎮 All Games</h1>

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />

        <div className="games-grid">
          {filteredGames.map((game) => (
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
      </div>
    </>
  );
}

export default Games;