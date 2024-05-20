import * as React from 'react';
import {View, Text, Button, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

function LogoTitle() {
  return (
    <Image
      style={{width: 50, height: 50}}
      source={require('@expo/snack-static/react-native-logo.png')}
    />
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{headerTitle: props => <LogoTitle {...props} />}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
