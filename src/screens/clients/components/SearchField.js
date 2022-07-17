import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function SearchField(props) {
  console.log(props.filter);

  return (
    <View style={styles.search}>
      <Image
        style={{marginLeft: 20, alignSelf: 'center'}}
        source={require('../assets/Icon1.png')}
      />
      <TextInput
        style={styles.textInp}
        placeholder="search"
        value={props.filter}
        onChangeText={text => {
          props.setFilter(text);
        }}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  textInp: {
    fontSize: 16,
    fontWeight: '400',
    height: 50,
    justifyContent: 'center',
    marginLeft: 10,
  },
  search: {
    flexDirection: 'row',
    borderRadius: 16,
    margin: 12,
    padding: 0,
    backgroundColor: '#F7F7F7',
  },
});
