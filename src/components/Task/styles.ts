import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  taskContainer: {
    width: "100%",
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "#262626",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#333333"
  },
  taskButton: {
    paddingHorizontal: 3.27,
    paddingVertical: 3.27,
  },
  taskCircle:{
    width: 17.45,
    height: 17.45,
    borderColor: "#4EA8DE",
    borderWidth: 2,
    borderRadius: 999,
  },
  taskCircleDone:{
    width: 17.45,
    height: 17.45,
    borderColor: "#5E60CE",
    backgroundColor: "#5E60CE",
    borderWidth: 2,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center"
  },
  taskText: {
    flex: 1,
    paddingHorizontal: 8,
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    lineHeight: 20,
    color: "#F2F2F2"
  },
  taskTextDone: {
    flex: 1,
    paddingHorizontal: 8,
    fontFamily: "Inter_400Regular",
    textDecorationLine: "line-through",
    fontSize: 14,
    lineHeight: 20,
    color: "#808080"
  },
  trashButton: {
    padding: 9
  }
})