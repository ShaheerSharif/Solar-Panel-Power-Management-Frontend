import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Alert } from "react-native";

export default function Logout() {
  const router = useRouter();

  // ! is code mein session khatam kara ke user ko signout krwana hai
  // ! ye `setTimeout` hatega ye sirf delay simulate krwarha hai
  useEffect(() => {
    const showLogoutAlert = () => {
      Alert.alert(
        "Logout",
        "Are you sure you want to logout?",
        [
          {
            text: "Yes",
            style: "destructive",
            onPress: () => router.replace("/(auth)/login"),
          },
          { text: "Cancel", style: "cancel", onPress: () => router.back() },
        ],
        { cancelable: false }
      );
    };

    showLogoutAlert();
  }, []);

  return;
}
