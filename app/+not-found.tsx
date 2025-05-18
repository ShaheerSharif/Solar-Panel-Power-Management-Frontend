import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";

export default function NotFoundScreen() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <Stack.Screen options={{ title: "Oops! This screen doesn't exist." }} />
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            if (isLoggedIn) {
              router.replace("/(home)/dashboard");
            } else {
              router.replace("/(auth)/login");
            }
          }}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
