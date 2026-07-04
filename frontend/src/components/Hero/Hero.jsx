import "./Hero.css";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover Your Next Adventure</h1>

        <p>
          Explore thousands of games with AI-powered recommendations,
          smart search, and personalized suggestions.
        </p>

        <div className="hero-buttons">
          <button className="browse-btn">Browse Games</button>
            <button
                className="hero-btn secondary"
                onClick={() => navigate("/ai")}
            >
                Ask AI
            </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;