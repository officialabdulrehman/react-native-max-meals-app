import { createContext, useState } from "react";

type FavoritesContextParams = {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
};

type Props = {
  children: JSX.Element | JSX.Element[];
};

const FavoritesContext = createContext<FavoritesContextParams>({
  ids: [],
  addFavorite: (id: string) => {},
  removeFavorite: (id: string) => {},
});

export const FavoritesContextProvider = ({ children }: Props) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const addFavorite = (id: string) => {
    setFavorites((currFav) => [id, ...currFav]);
  };

  const removeFavorite = (id: string) => {
    setFavorites((currFav) =>
      currFav.filter((idToBeRemoved) => id !== idToBeRemoved)
    );
  };

  const value = {
    ids: favorites,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
