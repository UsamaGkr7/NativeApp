import { Ionicons } from "@expo/vector-icons"; // Built-in icons in Expo
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#007AFF", // Blue when active
        tabBarInactiveTintColor: "#8E8E93", // Grey when inactive
        headerStyle: { backgroundColor: "#fff" },
        headerShown: false,
      }}
    >
      {/* Tab 1: Home */}
      <Tabs.Screen
        name="index" // Matches the file name index.tsx
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      {/* Tab 2: Profile */}
      <Tabs.Screen
        name="profile" // Matches the file name profile.tsx
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profilescreen" // Matches the file name profile.tsx
        options={{
          title: "profilescreen",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="car" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
