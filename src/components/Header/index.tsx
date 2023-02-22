import { View } from "react-native";
import LogoSvg from "../../../assets/todo.svg"
import { styles } from "./styles";

export function Header() {
  return(
    <View style={styles.container}>
      <LogoSvg 
        width={110.32}
        height={32}
      />
    </View>
  )
}