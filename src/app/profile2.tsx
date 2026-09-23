import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

const profile2 = () => {
  return (
    <SafeAreaView style={styles.container}>
      {" "}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=12" }}
          style={styles.image}
        />
        <Text style={styles.Heading}>Usama</Text>
        <Text style={styles.subHeading}>Flutter Developer</Text>
      </View>{" "}
      <View style={styles.statsRow}>
        <View style={styles.statsBox}>
          <Text style={styles.statsBox}>120</Text>
          <Text style={styles.StatsName}>Posts</Text>
        </View>
        <View style={styles.statsBox}>
          <Text style={styles.statsBox}>4.5k</Text>
          <Text style={styles.StatsName}>Followers</Text>
        </View>
      </View>
      <View>
        {/* <FlatList keyExtractor={{'r'}} data={} renderItem={}></FlatList> */}
      </View>
    </SafeAreaView>
  );
};

export default profile2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  image: {
    borderRadius: 50,
    height: 100,
    width: 100,
    marginBottom: 15,
  },
  Heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subHeading: {
    fontSize: 19,
    color: "gray",
    fontWeight: "normal",
  },

  statsRow: {
    flexDirection: "row", // Like Flutter's Row
    justifyContent: "space-around", // Like MainAxisAlignment.spaceAround
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
  },
  statsBox: {
    alignItems: "center",
  },
  StatsName: {
    fontWeight: "normal",
    fontSize: 18,
    color: "gray",
  },
  StatsNumber: {
    fontWeight: "bold",
    fontSize: 22,
    color: "blue",
  },
  bottom: {
    backgroundColor: "black",
    padding: 10,
    flexDirection: "column",
  },
});
