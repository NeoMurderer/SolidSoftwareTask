import { useBackgroundContext } from "@/providers/background";
import { Link, Stack } from "expo-router";
import Head from "expo-router/head";
import { StyleSheet, View, Text } from "react-native";

export default function NotFoundScreen() {
  const { color } = useBackgroundContext();
  return (
    <>
      <Head>
        <title>Page not found</title>
      </Head>
      <Stack.Screen options={{ title: "Oops!", headerStyle: { backgroundColor: color } }} />
      <View style={[styles.container, { backgroundColor: color }]}>
        <Text>This screen doesn't exist.</Text>
        <Link href="/" style={styles.link}>
          <Text>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
