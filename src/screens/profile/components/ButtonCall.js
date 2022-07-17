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

export default function ButtonCall(props) {
  console.log('ButtonCall')
  console.log(props)
  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles.buttonText,
        { backgroundColor: '#FB7360' },
      ]}>
      <Text style={[styles.buttonText, { color: '#FFFFFF' }]}>{props.text}</Text>
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
