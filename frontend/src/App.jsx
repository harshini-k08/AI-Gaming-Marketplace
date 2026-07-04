import { Routes, Route } from "react-router-dom";
import Wishlist from "./pages/Wishlist";
import Home from "./pages/Home";
import Games from "./pages/Games";
import GameDetails from "./pages/GameDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Recommendations from "./pages/Recommendations";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import AIChat from "./pages/AIChat";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import AIAssistant from "./pages/AIAssistant";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import CategoryGames from "./pages/CategoryGames";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/games" element={<Games />} />
      <Route path="/game/:id" element={<GameDetails />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route
    path="/recommendations"
    element={<Recommendations />}
/>
<Route path="/checkout" element={<Checkout />} />
<Route path="/order-success" element={<OrderSuccess />} />
<Route path="/ai-chat" element={<AIChat />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/admin" element={<Admin />} />
<Route path="/ai" element={<AIAssistant />} />
<Route path="/orders" element={<Orders />} />
<Route path="/profile" element={<Profile />} />
<Route path="/category/:category" element={<CategoryGames />} />
    </Routes>
  );
}

export default App;