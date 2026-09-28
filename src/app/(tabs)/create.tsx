import { useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const create = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const handleSubmit = () => {
    if (title.trim() === "" || subtitle.trim() === "") {
      Alert.alert("Please enter the text properly");
      return;
    }
    Alert.alert(`Successfully added ${title}`);
    setTitle("");
    setSubtitle("");
    Keyboard.dismiss();
  };

  return (
    // 3. KeyboardAvoidingView pushes the UI up when the keyboard opens
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      {/* 4. TouchableWithoutFeedback dismisses the keyboard when tapping outside */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          <Text style={styles.header}>Create New Post</Text>

          {/* Title Input */}
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter post title..."
            value={title}
            onChangeText={setTitle}
            placeholderTextColor="#999"
          />

          {/* Body Input */}
          <Text style={styles.label}>Body</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="What's on your mind?"
            value={subtitle}
            onChangeText={setSubtitle}
            multiline={true} // Allows multiple lines (like TextField maxLines: null)
            numberOfLines={4}
            textAlignVertical="top" // Aligns text to the top on Android
            placeholderTextColor="#999"
          />

          {/* Submit Button */}
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Publish Post</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  innerContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
    marginTop: 10,
  },
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    color: "#333",
  },
  textArea: {
    height: 120, // Fixed height for multiline
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
