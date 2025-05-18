import React from "react";
import { StyleSheet, View, ViewProps, ViewStyle } from "react-native";

type ThemedViewProps = ViewProps & {
  type?: "label" | "panel" | "list" | "listItem" | "graph";
  style?: ViewStyle | ViewStyle[];
  children?: React.ReactNode;
};

export default function ThemedView({ type, style, children }: ThemedViewProps) {
  type = type ?? "label";

  return <View style={[styles[type], style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {},
  panel: {},
  label: {},
  // Container for a list
  list: {},
  // Container for a list item
  listItem: {},
  // Container for a graph
  graph: {},
});
