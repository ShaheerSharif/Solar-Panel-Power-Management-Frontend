import React from "react";
import { StyleSheet, Text, TextProps, TextStyle } from "react-native";

type ThemedTextProps = TextProps & {
  type?: "title" | "subtitle" | "body";
  style?: TextStyle | TextStyle[];
  children: React.ReactNode;
};

export default function ThemedText({ type, style, children }: ThemedTextProps) {
  type = type ?? "body";

  return <Text style={[styles[type], style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {},
  subtitle: {},
  body: {},
});
