import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function profile() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header (Like a Column) */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=12" }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Usama</Text>
        <Text style={styles.role}>React Native Developer</Text>
      </View>

      {/* Stats (Like a Row) */}
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>120</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>4.5k</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  header: {
    alignItems: "center", // Cross axis (center horizontally)
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50, // Makes it a circle
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
    flexDirection: "row", // Like Flutter's Row
    justifyContent: "space-around", // Like MainAxisAlignment.spaceAround
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
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
  bottom: {
    backgroundColor: "black",
    padding: 10,
    flexDirection: "column",
  },
});
