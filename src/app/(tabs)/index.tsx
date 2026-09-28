import { useFavorites } from "@/context/FavoritesContext";
import { router } from "expo-router"; // Import the router
import { useEffect, useMemo, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function HomeScreen() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  // Inside your HomeScreen component:

  const filteredPosts = useMemo(() => {
    if (!search) return posts;
    return posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [posts, setSearch]);
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const fetchData = async () => {
    setError(null); // Clear previous errors
    // Don't set loading to true if we are just refreshing
    if (posts.length === 0) setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      if (!response.ok) throw new Error("Failed to fetch");

      const data = await response.json();
      setPosts(data);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search posts..."
        value={search}
        onChangeText={setSearch}
        placeholderTextColor="#999"
      />
      <Text style={styles.header}>My Feed</Text>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id as unknown as string}
        renderItem={({ item }) => {
          const isFav = isFavorite(item.id);

          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() => router.push(`/posts/${item.id}`)}
            >
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle} numberOfLines={1}>
                  {item.title}
                </Text>
                <Text style={styles.cardBody} numberOfLines={2}>
                  {item.body}
                </Text>
              </View>

              {/* The Heart Button */}
              <TouchableOpacity
                onPress={() =>
                  isFav ? removeFavorite(item.id) : addFavorite(item)
                }
                style={{ padding: 10 }}
              >
                <Text style={{ fontSize: 24, color: isFav ? "red" : "#ccc" }}>
                  {isFav ? "❤️" : "🤍"}
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    marginTop: 10,
  },
  loadingText: { marginTop: 10, fontSize: 16, color: "#666" },
  errorText: {
    fontSize: 18,
    color: "red",
    marginBottom: 20,
    textAlign: "center",
  },
  retryButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  retryText: { color: "white", fontWeight: "bold", fontSize: 16 },
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
    flex: 1,
  },
  cardBody: { fontSize: 14, color: "#666", flex: 1 },
  arrow: { fontSize: 20, color: "#007AFF", marginLeft: 10 },
  searchInput: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
});
