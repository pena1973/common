import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image
} from 'react-native';


export default function StrelaNazad({navigation}) {
console.log(navigation);
  return (
 
     <View
          style={{
            flexDirection: 'row',
            alignItems: 'stretch',
            justifyContent: 'space-between',
            marginTop: 50,
            marginLeft: 20
          }}>
          <TouchableOpacity  onPress={
           
            ()=> navigation.goBack()
            } >
            <Image
              style={{ alignSelf: 'flex-start' }}
              source={require('../assets/StrelaLevo.png')}></Image>
          </TouchableOpacity>

        </View>
  );
}



 


