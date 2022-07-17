import React from 'react';
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet
} from 'react-native';

export default function ButtonChat(props) {
  console.log('ButtonChat')
  console.log(props)
  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles.buttonText,
        { backgroundColor: '#FFFFFF' },
      ]}>
      <Text style={[styles.buttonText, { color: '#FB7360' }]}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  buttonText: {
    fontSize: 14,
    fontWeight: '800',
    lineHeight: 19,
    alignSelf: 'center',
  },
  button: {
    width: 160,
    margin: 3,
    borderRadius: 12,
    borderColor: '#FB7360',
    borderWidth: 1,
    padding: 15,
    //  textAlign: 'center'
  },
});
