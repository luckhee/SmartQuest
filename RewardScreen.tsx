import * as React from 'react';
import {useState} from 'react';
// eslint-disable-next-line prettier/prettier
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {styles} from './assets/RewardScreen';
import BuyScreen from './QuestScreen';

const Stack = createNativeStackNavigator();

const images = [
  {
    id: '1',
    source: require('./assets/images/airpop.png'),
    title: 'Aripod pro 2th',
    description: 'Apple',
    discount: '5%',
    point: '3💰',
  },
  {
    id: '2',
    source: require('./assets/images/airpopmax.png'),
    title: 'Airpod max',
    description: 'Apple',
    discount: '5%',
    point: '7💰',
  },
  {
    id: '3',
    source: require('./assets/images/ipad.png'),
    title: 'Ipad 7th',
    description: 'Apple',
    discount: '5%',
    point: '7💰',
  },
  {
    id: '4',
    source: require('./assets/images/newjeans.png'),
    title: 'newjeans',
    description: 'hive',
    discount: '5%',
    point: '3💰',
  },
  {
    id: '5',
    source: require('./assets/images/phone.png'),
    title: 'Galaxy 24',
    description: 'Samung',
    discount: '5%',
    point: '5💰',
  },
  {
    id: '6',
    source: require('./assets/images/watch.png'),
    title: 'Apple Watch',
    description: 'Apple',
    discount: '5%',
    point: '4💰',
  },
];

// const eventitem = ({
//   title
// })

function Reward({navigation}) {
  const handleBuy = () => {
    navigation.navigate('BuyScreen');
  };

  return (
    <View style={styles.Main_Container}>
      <View style={styles.Titlecontainer}>
        <Text style={styles.Main_title}>Reward</Text>
        <View style={[styles.RewardBox]}>
          <Text style={styles.RewardSearch}>🗓️</Text>
        </View>
      </View>
      <View style={styles.possessionbotton}>
        {/* onPress={handleReward} */}
        <Text style={styles.morebuttonText}>💰 39</Text>
      </View>
      <FlatList
        data={images}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.itemView}>
            <Image source={item.source} style={styles.image} />
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <View style={styles.timeAndStatusContainer}>
              <Text style={styles.itemdiscount}>{item.discount}</Text>
              <TouchableOpacity style={styles.coinBox}>
                <Text style={styles.point}>{item.point}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        numColumns={3}
        columnWrapperStyle={styles.columnWrapper}
      />
      <TouchableOpacity style={styles.loginButton}>
        {/* onPress={handleReward} */}
        <Text style={styles.buttonText}>Buy</Text>
      </TouchableOpacity>
    </View>
  );
  function mainscreen() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Reward">
          <Stack.Screen
            name="Reward"
            component={RewardScreen}
            options={{headerTitle: ''}}
          />
          <Stack.Screen
            name="BuyScreen"
            component={BuyScreen}
            options={{headerTitle: ''}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Reward;
