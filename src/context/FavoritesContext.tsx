import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface FavoritesContextType {
  favorites: Post[];
  addFavorite: (post: Post) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
  loading: boolean; // Add loading state for initial load
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true); // Start with loading true

  // 1. LOAD data when the app starts
  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      // AsyncStorage only stores STRINGS, so we must parse the JSON
      const storedFavorites = await AsyncStorage.getItem("my_favorites");
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error("Failed to load favorites", error);
    } finally {
      setLoading(false); // Done loading from disk
    }
  };

  // 2. SAVE data whenever the favorites array changes
  const saveFavorites = async (newFavorites: Post[]) => {
    try {
      // Convert the array to a JSON string before saving
      await AsyncStorage.setItem("my_favorites", JSON.stringify(newFavorites));
    } catch (error) {
      console.error("Failed to save favorites", error);
    }
  };

  const addFavorite = (post: Post) => {
    const updatedFavorites = [...favorites, post];
    setFavorites(updatedFavorites);
    saveFavorites(updatedFavorites); // Save to disk!
  };

  const removeFavorite = (id: number) => {
    const updatedFavorites = favorites.filter((p) => p.id !== id);
    setFavorites(updatedFavorites);
    saveFavorites(updatedFavorites); // Save to disk!
  };

  const isFavorite = (id: number) => {
    return favorites.some((p) => p.id === id);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite, loading }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}
