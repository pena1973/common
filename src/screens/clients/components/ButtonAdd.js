import React from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function ButtonAdd(props) {
  const [stateButon, setButton] = React.useState(0);

  const openChat = (h) => {
    // console.log(stateButon);
  
    setButton(stateButon + 1);
    props.onPress();
    // console.log(stateButon);
    // console.log(h);
  };

  return (
    <TouchableOpacity
      style={[styles.button, styles.buttonText]}
      onPress={() => openChat(1111)}>
     
      {/* так вызывать функцию с параметрами*/}
      <Text style={[styles.buttonText, { color: '#FFFFFF' }]}>
        {props.text +  stateButon}
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
    backgroundColor: '#FB7360',
    marginTop: 5,
    padding: 15,
    marginBottom: 30,
    width: SCREEN_WIDTH - 30,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
