import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  content: {
    flex: 1,
    marginHorizontal: 24
  },
  taskList: {
    marginTop: 12
  },
  emptyList: {
    alignItems: "center",
    paddingVertical: 48,
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: "#333333"
  },
  emptyListContent: {
    marginTop: 16
  },
  emptyTextBold: {
    fontFamily: "Inter_700Bold",
    fontSize: 14,
    color: "#808080"
  },
  emptyText: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    color: "#808080"
  }
});