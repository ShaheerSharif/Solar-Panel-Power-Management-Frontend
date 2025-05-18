import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={styles.headerDiv}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerDiv: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },
});
