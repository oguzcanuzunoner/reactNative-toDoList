import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ToDoList from './components/ToDoList';
import TopContainer from './components/TopContainer';
import AddToDo from './components/AddToDo';

const App = () => {
  const [toDoList, setToDoList] = useState([]);
  const [nonCompleted, setNonCompleted] = useState([]);

  const handleToggle = id => {
    setToDoList(
      toDoList.map(toDo =>
        toDo.id === id ? {...toDo, completed: !toDo.completed} : {...toDo},
      ),
    );
  };

  useEffect(() => {
    const filtered = toDoList.filter(item => item.completed === false);
    setNonCompleted(filtered);
  }, [toDoList]);

  return (
    <SafeAreaView style={styles.container}>
      <TopContainer count={nonCompleted.length} />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} />
      <AddToDo toDoList={toDoList} setToDoList={setToDoList} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
  },
});
