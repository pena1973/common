import * as React from 'react';
import { Text, View, StyleSheet, Button, Animated } from 'react-native';
import Constants from 'expo-constants';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileS from './src/screens/profile';
import AddingS from './src/screens/addind';
import ClientsS from './src/screens/clients';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import '@react-native-masked-view/masked-view';

// function Adding({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <AddingS onPress={() => navigation.navigate('Profile')}/>
//       <Button title="Идем в список клиентов"  onPress={() => navigation.navigate('Clients')} />
//       <Button title="Назад" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

// // функция не нужна
// function Clients({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <ClientsS onPress={() => navigation.navigate('Adding')}/>
//       <Button title="Идем в добавление" onPress={() => navigation.navigate('Adding')} />
//       <Button title="Идем в профиль" onPress={() => navigation.navigate('Profile')} />
//       <Button title="Назад" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

// function Profile({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <ProfileS />
//       <Button title="Назад" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Clients" screenOptions= {{headerShown: false}}>
      <Stack.Screen name="Clients" component={ClientsS}
       // Образец наименрования хедера
       // options={{ headerStyleInterpolator: forFade, title: 'Клиенты' }} 
      />
      <Stack.Screen name="Adding" component={AddingS}/>
      <Stack.Screen name="Profile" component={ProfileS}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
