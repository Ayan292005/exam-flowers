import React, { createContext, useEffect, useState } from "react";
export const favoritesContext = createContext();

function FavsProvider({children}) {
  let localFavorite = JSON.parse(localStorage.getItem("favorites"));
  let [favorites, setFavorites] = useState(localFavorite ? localFavorite : []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  let value={
    favorites,
    setFavorites
  }
  return (
    <>
    <favoritesContext.Provider value={value}>
        {children}
    </favoritesContext.Provider>
    </>
  )
}

export default FavsProvider;