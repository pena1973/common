import React from 'react';
import {View, Text, Dimensions, StyleSheet, TextInput} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function InputField(props) {
  // console.log('InputField');
  // console.log(props);
  console.log(props.text);

  const multiline = props?.multiline ? true : false;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <TextInput
        style={styles.textInp}
        placeholder={props.placeholder}
        value={props.text}
        multiline={multiline}
        numberOfLines={2}
        onChangeText={props.onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19,
    marginLeft: 16,
    alignSelf: 'flex-start',
  },
  textInp: {
    width: SCREEN_WIDTH - 30,
    borderRadius: 16,
    margin: 10,
    borderWidth: 0,
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 16,
    paddingRight: 16,
    lineHeight: 24,
    // gap: 30,
    backgroundColor: '#F7F7F7',
    color: '#A3A3A3',
    fontSize: 16,
    fontWeight: '400',
  },
});
