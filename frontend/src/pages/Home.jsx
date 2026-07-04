import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import SearchBar from "../components/SearchBar/SearchBar";
import Categories from "../components/Categories/Categories";
import FeaturedGames from "../components/FeaturedGames/FeaturedGames";
import TrendingGames from "../components/TrendingGames/TrendingGames";
import FlashSale from "../components/FlashSale/FlashSale";
import Footer from "../components/Footer/Footer";
import BannerSlider from "../components/BannerSlider/BannerSlider";
import RecentlyViewed from "../components/RecentlyViewed/RecentlyViewed";

function Home() {
  return (
    <>
      
      <Navbar />
      <BannerSlider />
      <Hero />
      <SearchBar />
      <Categories />
      <FeaturedGames />
      <RecentlyViewed />
      <TrendingGames />
      <FlashSale />
      <Footer />
    </>
  );
}

export default Home;