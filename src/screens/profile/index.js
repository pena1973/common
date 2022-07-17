import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';

import ButtonCall from './components/ButtonCall';
import ButtonChat from './components/ButtonChat';
import ButtonMore from './components/ButtonMore';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function Profile({navigation, route}) {
  //console.log(route.params);
  const {client} = route.params;
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'stretch',
            justifyContent: 'space-between',
            marginTop: 50,
            marginLeft: 20,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{alignSelf: 'flex-start'}}
              source={require('./assets/Strela.png')}></Image>
          </TouchableOpacity>

          <Image
            style={{alignSelf: 'flex-end'}}
            source={require('./assets/karandas.png')}></Image>
        </View>

        <View>
          <Image
            style={{
              width: 162,
              marginTop: 92,
              aspectRatio: 1,
              alignSelf: 'center',
              borderRadius: 100,
            }}
            source={client.link}
            //source={require('./assets/Client.png')}
          />
        </View>

        <Text style={styles.name}>{client.name}</Text>
        <Text style={[styles.text, {alignSelf: 'center'}]}>{client.city}</Text>

        <View style={styles.containerbutton}>
          <ButtonChat text="Чат" />
          <ButtonCall text="Звонок" />
        </View>

        <Text style={styles.bio}>Биография</Text>
        <Text style={styles.text}>
          Я увлекаюсь рыбалкой, сноубордом и люблю играть со своей трехлетней
          дочкой. По образованию маркетолог, много лет работал на крупные
          компании. Теперь решил погрузиться в мир IT.
        </Text>

        <ButtonMore text="Показать больше" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#EDF0F3',
    padding: 5,
    resizeMode: 'contain',
  },

  name: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 36,
    alignSelf: 'center',
    color: '#212322',
  },
  bio: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: '#212322',
    marginTop: 86,
    marginLeft: 24,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#A3A3A3',
    marginLeft: 24,
  },
  containerbutton: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
