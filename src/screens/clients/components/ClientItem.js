import React from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  View,
} from 'react-native';


export default function ClientItem({client, onPress})
{
 // console.log(client.onPress);
   return (
    <TouchableOpacity style={styles.button} onPress = {()=>onPress(client)}>
      <Image
        style={{
          width: 60,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 30,
        }}
        source={client.link}
        
      />

      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{client.name}</Text>
        <Text style={styles.city}>{client.city}</Text>
      </View>

      <View style={{ width: 20, height: 60, justifyContent: 'center' }}>
        <Image
          style={{ marginLeft: 0 }}
          source={require('../assets/StrelaPravo.png')}
        />
      </View>
      
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
 
  button: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    borderRadius: 16,
    margin: 5,
    backgroundColor: '#F7F7F7',
    //  backgroundColor: 'grey',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },

  name: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: '#212322',
  },
  city: {
    marginLeft: 10,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 16,
    alignSelf: 'flex-start',
  },
});

