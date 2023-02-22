import { ScrollView, Text, View } from "react-native";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { Info } from "../../components/Info";
import ClipBoardSVG from "../../../assets/clipboard.svg";
import { styles } from "./styles";
import { Task } from "../../components/Task";

export function Home() {
  return(
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <Form />
        <Info />

        <ScrollView style={styles.taskList}>
          <Task />
        </ScrollView>
        {/* <View style={styles.emptyList}>
          <ClipBoardSVG width={56} height={56}/>

          <View style={styles.emptyListContent}>
            <Text style={styles.emptyTextBold}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.emptyText}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        </View> */}
      </View>
    </View>
  )
}