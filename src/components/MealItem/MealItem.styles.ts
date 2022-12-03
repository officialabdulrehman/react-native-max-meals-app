import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    margin: 16,
    borderRadius: 10,
  },
  innerContainer: { // for ios compatibility
    borderRadius: 10,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontFamily: "sans-serif-medium",
    backgroundColor: "#f9f9f9",
    color: "rgba(79, 195, 247, 1)",
    fontSize: 20,
    textAlign: "center",
    paddingVertical: 8

  },
  details: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8
  },
  detailItem: {
    fontFamily: "sans-serif-medium",
    marginHorizontal: 8,
    fontSize: 14
  }
})