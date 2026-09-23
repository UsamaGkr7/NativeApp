import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
      <Link href={"/profile"}>
        {" "}
        <Text>Go to Profile</Text>{" "}
      </Link>
      <Link href={"/profilescreen"}>
        {" "}
        <Text>Go to Profile2</Text>{" "}
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
