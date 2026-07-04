import download from "../assets/download.png";
const games = [
  {
    id: 1,
    title: "GTA VI",
    category: "Action",
    platform: "PC",
    developer: "Rockstar Games",
    publisher: "Rockstar Games",
    releaseDate: "2026",
    price: 3999,
    rating: 4.9,
    stock: 50,
    image: download,
    description:
      "Experience the next generation of open-world action with GTA VI.",
  },

  {
    id: 2,
    title: "Cyberpunk 2077",
    category: "RPG",
    platform: "PC",
    developer: "CD Projekt Red",
    publisher: "CD Projekt",
    releaseDate: "2020",
    price: 2499,
    rating: 4.8,
    stock: 40,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co7497.jpg",
    description:
      "Explore the futuristic Night City with endless possibilities.",
  },

  {
    id: 3,
    title: "Elden Ring",
    category: "RPG",
    platform: "PC",
    developer: "FromSoftware",
    publisher: "Bandai Namco",
    releaseDate: "2022",
    price: 2999,
    rating: 4.9,
    stock: 35,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.jpg",
    description:
      "A fantasy action RPG created by FromSoftware and George R. R. Martin.",
  },

  {
    id: 4,
    title: "Red Dead Redemption 2",
    category: "Adventure",
    platform: "PC",
    developer: "Rockstar Games",
    publisher: "Rockstar Games",
    releaseDate: "2018",
    price: 1999,
    rating: 4.9,
    stock: 60,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1q1f.jpg",
    description:
      "Live the life of an outlaw in America's dying Wild West.",
  },

  {
    id: 5,
    title: "Forza Horizon 5",
    category: "Racing",
    platform: "PC",
    developer: "Playground Games",
    publisher: "Xbox Game Studios",
    releaseDate: "2021",
    price: 2799,
    rating: 4.8,
    stock: 45,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co3ofx.jpg",
    description:
      "Drive hundreds of the world's greatest cars in beautiful Mexico.",
  },

  {
    id: 6,
    title: "EA Sports FC 25",
    category: "Sports",
    platform: "PC",
    developer: "EA Vancouver",
    publisher: "Electronic Arts",
    releaseDate: "2025",
    price: 3499,
    rating: 4.7,
    stock: 70,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co8h7m.jpg",
    description:
      "Experience the latest football simulation with realistic gameplay.",
  },
];

export default games;