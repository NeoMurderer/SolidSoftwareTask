import { StyleSheet, Animated } from "react-native";
import Head from "expo-router/head";
import { useCallback } from "react";
import { useBackgroundContext } from "@/providers/background";
import VisibleText from "@/components/VisibleText";

export default function HomeScreen() {
  const { color, setRandomColor } = useBackgroundContext();
  const handleOnClick = useCallback(() => {
    setRandomColor();
    return true;
  }, []);

  return (
    <>
      <Head>
        <meta name="description" content="Hello there it's not just a message - it's a beginning of journey." />
        <meta name="keywords" content="hello, world, journey" />
      </Head>
      <Animated.View onStartShouldSetResponder={handleOnClick} style={[styles.content, { backgroundColor: color }]}>
        <VisibleText style={styles.title}>Hello there</VisibleText>
        <VisibleText style={styles.input}>{color}</VisibleText>
      </Animated.View>
    </>
  );
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // Note: only web supports transitions on background-color
    transition: "background-color 0.5s ease",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    width: 150,
    height: 40,
    margin: 12,
    padding: 10,

    borderWidth: 1,
    borderColor: "white",
    textAlign: "center",
  },
});
