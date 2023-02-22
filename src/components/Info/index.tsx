import { Text, View } from "react-native"
import { styles } from "./styles"

interface InfoProps {
  total: number
  completed: number
}

export function Info({total=0, completed=0}: InfoProps) {
  return (
    <View style={styles.infoContainer}>
      <View style={styles.info}>
        <Text style={styles.infoText1}>Criadas</Text>
        <Text style={styles.infoValue}>{total}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.infoText2}>Concluídas</Text>
        <Text style={styles.infoValue}>{completed}</Text>
      </View>
    </View>
  )
}