import React, {useState} from 'react';
import {View, TouchableOpacity, TextInput, Text, Alert} from 'react-native';
import styles from './AddToDo.styles';

const AddToDo = ({toDoList, setToDoList}) => {
  const [input, setInput] = useState('');
  const [focus, setFocus] = useState(false);
  const handleInput = text => setInput(text);
  const onSubmit = () => {
    if (input.trim() === '') {
      Alert.alert('BOŞ OLAMAZ!');
    } else {
      setToDoList([
        ...toDoList,
        {
          id: new Date().getTime(),
          toDo: input,
          completed: false,
        },
      ]);
      setInput('');
    }
  };

  return (
    <View
      style={styles.container}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}>
      <TextInput
        style={styles.textInput}
        placeholder="Yapılacak..."
        onChangeText={handleInput}
        value={input}
      />
      <TouchableOpacity
        style={focus ? styles.button : styles.notFocus}
        onPress={onSubmit}>
        <Text style={styles.text}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddToDo;
