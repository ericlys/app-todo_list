import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Icon from "@expo/vector-icons/Feather";

interface TaskProps {
  task: {
    id: string
    description: string
    isDone: boolean
  }
  setDone: (id: string) => void
  deleteTask: (id: string) => void
}

export function Task({ task, setDone, deleteTask}: TaskProps) {

  function handleTaskDone() {
    setDone(task.id)
  }

  function handleDeleteTask() {
    deleteTask(task.id)
  }

  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity style={styles.taskButton} onPress={handleTaskDone}>
        <View style={ task.isDone ? styles.taskCircleDone : styles.taskCircle}>
          {task.isDone && <Icon name="check" color="#ffff"/>}
        </View>
      </TouchableOpacity>

      <Text style={ task.isDone ? styles.taskTextDone : styles.taskText}>
        {task.description}
      </Text>

      <TouchableOpacity style={styles.trashButton} onPress={handleDeleteTask}>
        <Icon name="trash-2" color="#808080" size={16}/>
      </TouchableOpacity>
    </View>
  )
}