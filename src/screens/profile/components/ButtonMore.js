import React from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function ButtonMore(props) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles.buttonText,
        {
          backgroundColor: '#FFFFFF',
          marginTop: 15,
          width: SCREEN_WIDTH - 30,
          flexDirection: 'row',
          justifyContent: 'center',
        },
      ]}>
      <Text style={[styles.buttonText, { color: '#FB7360' }]}>
       {props.text}       
        <Image
          style={{ marginLeft: 10 }}
          source={require('../assets/StrelaVniz.png')}          
          
        />
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
    //  textAlign: 'center'
  },
});
