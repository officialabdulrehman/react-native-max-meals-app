import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 32
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontFamily: "sans-serif-medium",
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: "rgba(79, 195, 247, 1)",
  },
  sectionHeadingContainer: {

  },
  sectionHeading: {
    color: "#111",
    fontFamily: "sans-serif-medium",
    fontSize: 18,
    margin: 6,
    textAlign: "center"
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
  },
  detailText: {
    color: '#111',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
})