import React from 'react';
import {
  Text,
  TouchableOpacity,
 // Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function ButtonAdd(props) {
  const openChat = () => {
    props.setCount(props.stateCount + 1);
    //alert("Ура!")
  };
  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles.buttonText,
        {
          backgroundColor: '#FB7360',
          marginTop: 15,
          width: SCREEN_WIDTH - 30,
          flexDirection: 'row',
          justifyContent: 'center',
        },
      ]}
      onPress={() => {
        props.setCount(props.stateCount + 1);
        props.onPress();
      }}>
      <Text style={[styles.buttonText, { color: '#FFFFFF' }]}>
        {props.text}
      </Text>
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
  },
});
