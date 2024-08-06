import { StyleSheet, Text, View } from "react-native";
import Head from "expo-router/head";
import { useCallback } from "react";
import { useBackgroundContext } from "@/providers/background";

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
      <View onStartShouldSetResponder={handleOnClick} style={[styles.content, { backgroundColor: color }]}>
        <Text style={styles.title}>Hello there</Text>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    userSelect: 'none'
  }
});
