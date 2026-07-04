import { useState, useEffect } from "react";
import "./BannerSlider.css";

const banners = [
  {
    title: "🔥 Summer Sale",
    subtitle: "Up to 70% OFF on Top Games",
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=1200"
  },
  {
    title: "🎮 New Releases",
    subtitle: "Explore the latest AAA games",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200"
  },
  {
    title: "🤖 AI Recommended",
    subtitle: "Games picked just for you",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=1200"
  }
];

function BannerSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="banner-slider"
      style={{
        backgroundImage: `url(${banners[current].image})`,
      }}
    >
      <div className="overlay">
        <h1>{banners[current].title}</h1>
        <p>{banners[current].subtitle}</p>
      </div>
    </div>
  );
}

export default BannerSlider;