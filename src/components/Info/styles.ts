import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  infoContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32
  },
  info: {
    flexDirection: "row",
    alignItems: "center"
  },
  infoText1: {
    fontSize: 14,
    fontFamily: "Inter_700Bold",
    marginRight: 8,
    color: "#4EA8DE",
  },
  infoText2: {
    fontSize: 14,
    fontFamily: "Inter_700Bold",
    marginRight: 8,
    color: "#8284FA",
  },
  infoValue: {
    fontSize: 12,
    fontFamily: "Inter_700Bold",
    color: "#D9D9D9",
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 999,
    backgroundColor: "#333333"
  }
})