import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';

import InputField from './components/InputField';
import ButtonAdd from './components/ButtonAdd';
import StrelaNazad from '../components/StrelaNazad';

export default function Adding({navigation}) {
  const [stateFoto, setFoto] = React.useState('');
  const [stateFIO, setFIO] = React.useState('');
  const [statePhone, setPhone] = React.useState('');
  const [stateSity, setSity] = React.useState('');
  const [stateHobby, setHobby] = React.useState('');
  const [stateCount, setCount] = React.useState(0);

  const onAddClient = () => {
    const client = {name: stateFIO, city: stateSity};
    navigation.navigate('Clients', {newClient: client});
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <StrelaNazad navigation={navigation} />

      <View style={styles.container}>
        <Text style={styles.addNew}>Добавить нового</Text>
        <InputField
          title="Фото"
          placeholder="Вставьте ссылку на фото"
          onChangeText={setFoto}
          text={stateFoto}
        />
        <InputField
          title="ФИО"
          placeholder="Введите фамилию и имя"
          onChangeText={setFIO}
          text={stateFIO}
        />
        <InputField
          title="Номер телефона"
          placeholder="+7 (000) 000 00 00"
          onChangeText={setPhone}
          text={statePhone}
        />
        <InputField
          title="Город"
          placeholder="Выберите город"
          onChangeText={setSity}
          text={stateSity}
        />
        <InputField
          title="Био"
          placeholder="Укажите хобби, интересы, образование и стаж работы"
          onChangeText={setHobby}
          text={stateHobby}
          multiline="true"
        />

        <ButtonAdd
          text={'Добавить (' + stateCount + ')'}
          stateCount={stateCount}
          setCount={setCount}
          onPress={onAddClient}
        />
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

  addNew: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 24,
    color: '#212322',
    marginTop: 30,
    marginBottom: 20,
    alignSelf: 'center',
  },
});
