import { router } from "expo-router"; // Import the router
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const POSTS = [
  { id: "1", title: "Learning React Native" },
  { id: "2", title: "Expo Router is Magic" },
  { id: "3", title: "Flutter vs React Native" },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Feed</Text>

      <FlatList
        data={POSTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            // THIS IS THE NAVIGATION PART!
            onPress={() => router.push(`/posts/${item.id}`)}
          >
            <Text style={styles.cardText}>{item.title}</Text>
            <Text style={styles.arrow}>→</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  header: { fontSize: 28, fontWeight: "bold", marginBottom: 20, color: "#333" },
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2, // Android shadow
  },
  cardText: { fontSize: 18, fontWeight: "600" },
  arrow: { fontSize: 20, color: "#007AFF" },
});
