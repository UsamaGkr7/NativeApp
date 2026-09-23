import { router, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function PostDetailsScreen() {
  // 1. Get the ID from the URL
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Post Details</Text>

      {/* 2. Display the ID we passed */}
      <Text style={styles.idText}>You clicked on Post ID: {id}</Text>

      <Text style={styles.body}>
        This is the content for post {id}. In a real app, you would fetch data
        from an API using this ID.
      </Text>

      {/* 3. Go Back Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.back()} // Equivalent to Navigator.pop()
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  idText: {
    fontSize: 24,
    color: "#007AFF",
    textAlign: "center",
    marginBottom: 20,
  },
  body: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: { color: "white", fontSize: 18, fontWeight: "bold" },
});
