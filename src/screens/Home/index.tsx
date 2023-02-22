import { Alert, FlatList, Text, View } from "react-native";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { Info } from "../../components/Info";
import { Task } from "../../components/Task";

import ClipBoardSVG from "../../../assets/clipboard.svg";

import { styles } from "./styles";
import { useState } from "react";
import uuid from 'react-native-uuid';

interface Task {
  id: string,
  description: string;
  isDone: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([])

  function taskAdd( description: string ){
    if(description.length === 0) return

    const newTask = {
      id: uuid.v4().toString(),
      description,
      isDone: false
    }

    setTasks(prevTasks => [ newTask, ...prevTasks])
  }

  function switchTaskDone( id: string ) {
    const newTaskListWithTaskDone = tasks.map(task => {
      if(task.id === id) {
        return {...task, isDone: !task.isDone}
      }
      return task
    })
    
    setTasks(newTaskListWithTaskDone)
  }

  function deleteTask( id: string ) {
    Alert.alert("Excluir", "Deseja excluir a task?", [
      {
        text: "Sim",
        onPress: () => {
          const newListWitoutTask = tasks.filter(task => task.id !== id)
          setTasks(newListWitoutTask)
        }
      },
      {
        text: "Não",
        style: "cancel"
      }
    ])
  }

  const {total, completed} = tasks.reduce((acc, task) =>{
    if (task.isDone) {
      acc.completed++
    }
    acc.total++
    return acc
  }
  , {
    total: 0, 
    completed: 0
  })

  return(
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <Form setTask={taskAdd}/>
        <Info total={total} completed={completed}/>

        {tasks.length > 0 ? 
        (
          <FlatList 
            style={styles.taskList}
            data={tasks}
            keyExtractor={(task) => task.id}
            renderItem={({item}) => (
             <Task 
                key={item.id}
                task={item}
                setDone={switchTaskDone}
                deleteTask={deleteTask}
              />
            )}
          />          
        )
        :
        (      
          <View style={styles.emptyList}>
            <ClipBoardSVG width={56} height={56}/>

            <View style={styles.emptyListContent}>
              <Text style={styles.emptyTextBold}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.emptyText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          </View>   
        )}
      </View>
    </View>
  )
}