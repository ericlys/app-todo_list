import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: -27
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: "#262626",
    borderRadius: 6,
    color: "#F2F2F2",
    padding: 16,

    fontFamily: "Inter_400Regular",
    fontSize: 16,
    marginRight: 4
  },
  button: {
    width: 52,
    height: 52,
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center"
  }
})