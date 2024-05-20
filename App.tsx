import * as React from 'react';
import {useState} from 'react';
// eslint-disable-next-line prettier/prettier
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen from './MainScreen';
import RewardScreen from './RewardScreen';
import QuestScreen from './QuestScreen';
import DetailPage from './DetailPage';
import ChoiceQuest from './ChoiceQuest';
import CustomQuest from './CustomQuest';
function LoginScreen({navigation}) {
  const [ID, setID] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    //로그인 로직 처리 여기다가 하셈

    console.log('ID:', ID);
    console.log('password:', password);

    navigation.navigate('Main');
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Login</Text>
      <TextInput
        placeholder="ID"
        value={ID}
        onChangeText={setID}
        style={style.input}
      />

      <TextInput
        placeholder="PassWord"
        value={password}
        onChangeText={setPassword}
        style={style.input}
      />

      <TouchableOpacity style={style.loginButton} onPress={handleLogin}>
        <Text style={style.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{headerTitle: ''}}
        />
        <Stack.Screen
          name="Reward"
          component={RewardScreen}
          options={{headerTitle: ''}}
        />
        <Stack.Screen
          name="QuestScreen"
          component={QuestScreen}
          options={{headerTitle: ''}}
        />
        <Stack.Screen
          name="Detail"
          component={DetailPage}
          options={{headerTitle: ''}}
        />
        <Stack.Screen
          name="ChoiceQuest"
          component={ChoiceQuest}
          options={{headerTitle: ''}}
        />
        <Stack.Screen
          name="CustomQuest"
          component={CustomQuest}
          options={{headerTitle: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  Main_Container: {
    flex: 1,
    justifyContent: 'start', //세로축 정렬
    alignItems: 'end', //가로축 정렬
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  Main_title: {
    fontSize: 20,
    marginBottom: 30,
  },
  Month_title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#33B86B',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#0047AB',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default App;
