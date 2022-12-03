import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    backgroundColor: "#f1f1f1",
    overflow: "hidden"
  },
  innerContainer: {
    flex: 1
  },
  textContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontFamily: "sans-serif-thin",
    fontWeight: "bold",
    fontSize: 18
  }
})