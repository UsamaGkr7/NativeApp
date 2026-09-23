import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const profilescreen2 = () => {
  interface post {
    id: string;
    title: string;
    imageUrl: string;
    likes: number;
  }

  const MOCK_POSTS: post[] = [
    {
      id: "1",
      title: "React Native is awesome",
      imageUrl: "https://picsum.photos/200/300?random=1",
      likes: 42,
    },
    {
      id: "2",
      title: "Learning Flexbox today",
      imageUrl: "https://picsum.photos/200/300?random=2",
      likes: 15,
    },
    {
      id: "3",
      title: "Expo Router is the future",
      imageUrl: "https://picsum.photos/200/300?random=3",
      likes: 89,
    },
    {
      id: "4",
      title: "Flutter vs React Native",
      imageUrl: "https://picsum.photos/200/300?random=4",
      likes: 120,
    },
    {
      id: "5",
      title: "Building my first app",
      imageUrl: "https://picsum.photos/200/300?random=5",
      likes: 7,
    },
  ];

  const renderitem = ({ item }: { item: post }) => (
    <TouchableOpacity>
      <Image source={{ uri: item.imageUrl }} style={styles.postImage} />
      <View style={styles.postContent}>
        <Text style={styles.postTitle}>{item.title}</Text>
        <Text style={styles.postLikes}>❤️ {item.likes} likes</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text>profilescreen2</Text>
      <FlatList
        data={MOCK_POSTS}
        keyExtractor={(item) => item.id}
        renderItem={renderitem}
      />
    </View>
  );
};

export default profilescreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 20,
  },
  header: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  role: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  statBox: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#007AFF",
  },
  statLabel: {
    fontSize: 14,
    color: "#888",
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  listContainer: {
    paddingBottom: 20, // Adds space at the bottom of the list
  },
  postCard: {
    flexDirection: "row", // Like Flutter's Row
    backgroundColor: "white",
    borderRadius: 12,
    marginBottom: 12,
    overflow: "hidden", // Ensures the image respects the border radius
    elevation: 2, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  postImage: {
    width: 100,
    height: 100,
  },
  postContent: {
    flex: 1, // Takes remaining space (Like Expanded in Flutter)
    padding: 12,
    justifyContent: "center",
  },
  postTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  postLikes: {
    fontSize: 14,
    color: "#FF3B30",
  },
});
