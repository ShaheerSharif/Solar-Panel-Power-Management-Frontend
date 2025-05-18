import { Tabs } from "expo-router";

export default function HomeLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="dashboard" options={{ title: "Home" }} />
      <Tabs.Screen name="history" options={{ title: "History" }} />
      <Tabs.Screen name="alerts" options={{ title: "Alerts" }} />
      <Tabs.Screen name="settings" options={{ title: "Settings" }} />
      <Tabs.Screen name="logout" options={{ title: "Logout" }} />
    </Tabs>
  );
}
