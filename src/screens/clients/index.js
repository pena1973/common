import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  TextInput,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';

import SearchField from './components/SearchField';
import ButtonAdd from './components/ButtonAdd';
import ClientItem from './components/ClientItem';
import StrelaNazad from '../components/StrelaNazad';

const clients = [
  {
    name: 'Ivan Ivanov',
    city: 'Berlin',
    link: require('./assets/Ellipse1.png'),
    id: 1,
  },
  {
    name: 'Petr Ivanov',
    city: 'Ber',
    link: require('./assets/Ellipse2.png'),
    id: 2,
  },
  {
    name: 'Sergey Ivanov',
    city: 'Kaz',
    link: require('./assets/Ellipse3.png'),
    id: 3,
  },
];

export default function Clients({navigation, route}) {
  // загружаем из памяти при старте программы надо в clients массив сложить
  React.useEffect(() => {
    AsyncStorage.getItem('clients')
      .then(value => {
        const parsedValue = value != null ? JSON.parse(value) : null;
        //replace clietns with parsedValue
        console.log(value);
        console.log(parsedValue);
      })
      .catch(error => console.log(error));
  }, []);

  // Складываем в память по хуку
  React.useEffect(() => {
    const client = route?.params?.newClient;
    if (client) {
      clients.push(client);
      filterClients(filter);
      const jsonValue = JSON.stringify(filterClients);
      AsyncStorage.setItem('clients', jsonValue)
        .then(() => console.log('success'))
        .catch(() => console.log('error'));
    }
  }, [route?.params?.newClient]);

  const onPressClient = client => {
    // console.log(client);
    navigation.navigate('Profile', {client});
  };

  const [filteredClients, setFilteredClients] = React.useState(clients);
  const [filter, setFilter] = React.useState('');

  React.useEffect(() => {
    filterClients(filter);
  }, [filter]);

  const renderItem = ({item, index}) => {
    return <ClientItem client={item} onPress={onPressClient} />;
  };
  const os = Platform.os;

  // фильтер - функция которая вызывает функцию отбора а на вход заходит элемент массива
  const filterClients = filter => {
    const fClients = clients.filter(client =>
      client.name.toLowerCase().includes(filter.toLowerCase()),
    );

    setFilteredClients([...fClients]);
  };

  return (
    <View
      style={{
        resizeMode: 'contain',
        flex: 1,
        backgroundColor: '#ecf0f1',
        marginTop: Platform.os === 'android' ? 60 : 0,
      }}>
      <StrelaNazad navigation={navigation} />

      <Text
        style={{
          fontSize: 34,
          fontWeight: '700',
          lineHeight: 51,
          color: '#212322',
          marginLeft: 30,
          marginTop: 30,
        }}>
        {' '}
        Клиенты
      </Text>

      <SearchField filter={filter} setFilter={setFilter} />

      <View style={styles.container}>
        <FlatList
          data={filteredClients}
          renderItem={renderItem}
          keyExtractor={renderItem => renderItem.id}
        />
      </View>
      <ButtonAdd
        text="Добавить нового"
        onPress={() => navigation.navigate('Adding')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
    flexDirection: 'row',
    borderRadius: 16,
    resizeMode: 'contain',
    //  backgroundColor: 'green',
  },
});
