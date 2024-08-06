import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

export default function VisibleText({ children, style }: { children: React.ReactNode; style?: StyleProp<TextStyle> }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    // Note: Only web supports mix-blend-mode.
    mixBlendMode: "difference",
    userSelect: "none",
  },
});
