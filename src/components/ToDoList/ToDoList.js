import React from 'react';
import {Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './ToDoList.styles';

const ToDoList = ({toDoList, handleToggle}) => {
  const renderToDo = ({item}) => (
    <TouchableOpacity
      onPress={() => handleToggle(item.id)}
      style={item.completed ? styles.container : styles.do_Container}>
      <Text style={styles.text}>{item.toDo}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      keyExtractor={item => item.id}
      data={toDoList}
      renderItem={renderToDo}
    />
  );
};

export default ToDoList;
