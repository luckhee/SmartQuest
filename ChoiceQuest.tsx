import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

const QuestOptions = ({navigation}) => {
  return (
    <ImageBackground
      source={{uri: 'https://example.com/background-image.jpg'}} // 원하는 배경 이미지 URL로 대체
      style={styles.background}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CustomQuest')}>
          {/* <Icon name="edit" size={24} color="#fff" style={styles.icon} /> */}
          <Text style={styles.buttonText}>Create Your Own Quest</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('QuestScreen')}>
          {/* <Icon name="shuffle" size={24} color="#fff" style={styles.icon} /> */}
          <Text style={styles.buttonText}>Generate a Quest</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    width: '70%',
    backgroundColor: '#0047AB',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    // fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default QuestOptions;
