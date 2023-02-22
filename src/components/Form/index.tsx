import { Keyboard, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Icon from "@expo/vector-icons/Feather";
import { useState } from "react";

interface FormProps {
  setTask: (description: string) => void;
}

export function Form({setTask}: FormProps){
  const [taskDescription, setTaskDescription] = useState("")

  function handleNewTask() {
    setTask(taskDescription)
    setTaskDescription("")
    Keyboard.dismiss()
  }

  return(
    <View style={styles.form}>
      <TextInput 
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        value={taskDescription}
        onChangeText={setTaskDescription}
      />

      <TouchableOpacity style={styles.button} onPress={handleNewTask}>
       <Icon name="plus-circle" size={16} color="#F2F2F2" />
      </TouchableOpacity>
    </View>
  )
}