// context/FavoritesContext.tsx
import { createContext, ReactNode, useContext, useState } from "react";

// 1. Define the shape of a Post (Same as before)
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// 2. Define what our Context will provide
interface FavoritesContextType {
  favorites: Post[];
  addFavorite: (post: Post) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

// 3. Create the Context
const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

// 4. Create the Provider (This holds the actual data)
export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Post[]>([]);

  const addFavorite = (post: Post) => {
    // Prevent duplicates
    if (!favorites.find((p) => p.id === post.id)) {
      setFavorites([...favorites, post]);
    }
  };

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter((p) => p.id !== id));
  };

  const isFavorite = (id: number) => {
    return favorites.some((p) => p.id === id);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

// 5. Create a custom hook to make it easier to use (Optional but recommended)
export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}
