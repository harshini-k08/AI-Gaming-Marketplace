import { createContext, useState } from "react";

export const WishlistContext = createContext();

function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (game) => {
    const exists = wishlist.find((item) => item.id === game.id);

    if (!exists) {
      setWishlist([...wishlist, game]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((game) => game.id !== id));
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistProvider;