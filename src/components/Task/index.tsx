import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Icon from '@expo/vector-icons/Feather';
import { useState } from "react";


export function Task() {
  const [done, setDone] = useState(false);

  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity style={styles.taskButton} onPress={() => setDone(!done)}>
        <View style={ done ? styles.taskCircleDone : styles.taskCircle}>
          {done && <Icon name="check" color="#ffff"/>}
        </View>
      </TouchableOpacity>

      <Text style={ done ? styles.taskTextDone : styles.taskText}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
      </Text>

      <TouchableOpacity style={styles.trashButton}>
        <Icon name="trash-2" color="#808080" size={16}/>
      </TouchableOpacity>
    </View>
  )
}