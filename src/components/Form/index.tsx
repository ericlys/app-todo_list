import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Icon from '@expo/vector-icons/Feather';

export function Form(){
  return(
    <View style={styles.form}>
      <TextInput 
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
      />

      <TouchableOpacity style={styles.button}>
       <Icon name="plus-circle" size={16} color="#F2F2F2" />
      </TouchableOpacity>
    </View>
  )
}