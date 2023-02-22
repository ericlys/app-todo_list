import { Text, View } from "react-native"
import { styles } from "./styles"

export function Info() {
  return (
    <View style={styles.infoContainer}>
      <View style={styles.info}>
        <Text style={styles.infoText1}>Criadas</Text>
        <Text style={styles.infoValue}>0</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.infoText2}>Concluídas</Text>
        <Text style={styles.infoValue}>0</Text>
      </View>
    </View>
  )
}