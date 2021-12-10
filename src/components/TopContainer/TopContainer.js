import React from 'react';
import {View, Text} from 'react-native';
import styles from './TopContainer.styles';

const TopContainer = props => {
  return (
    <View style={styles.top_container}>
      <Text style={styles.text}>Yapılacaklar</Text>
      <Text style={styles.text}>{props.count}</Text>
    </View>
  );
};

export default TopContainer;
