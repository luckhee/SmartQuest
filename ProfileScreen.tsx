import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  FlatList,
  ScrollView,
} from 'react-native';
import EditProfileScreen from './MyPage/EditProfileScreen'; //조사 페이지
import {CommonActions} from '@react-navigation/native';

const ongoingEventsData = [
  {
    id: '2',
    title: 'Participation in Team-Based Sports \nor Activities',
    description: 'Schools and Educational Institutions',
    date: '13',
    day: 'Tue',
    // icon: 'movie',
    time: '08:00-14:00',
    color: 'white',
    statusColor: 'red',
    status: 'continue',
  },
  {
    id: '3',
    title: 'Volunteer Work Participation',
    description: 'Community Parks for Environmental \nClean-ups',
    date: '18',
    day: 'Wed',
    time: '10:00-13:00',
    // icon: 'movie',
    color: 'white',
    statusColor: 'red',
    status: 'continue',
  },
];

/* 설문조사 페이지 네비게이터
const handleEditProfile = (navigation) => {
  // Navigate to an EditProfileScreen where users can modify their data
  navigation.navigate('EditProfileScreen');
};*/

const ProfileScreen = ({navigation}) => {
  const activeQuests = ongoingEventsData.filter(
    event => event.status === 'continue',
  );

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Do you want to log out?',
      [
        {
          text: 'Yes',
          onPress: () =>
            navigation.dispatch(
              CommonActions.reset({index: 0, routes: [{name: 'Login'}]}),
            ),
        },
        {
          text: 'No',
          onPress: () => console.log('Logout cancelled'),
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  };

  const handleChangePassword = () => {
    Alert.alert(
      '재조사 확인',
      '조사하던거 재 조사하시겠습니까?',
      [
        {text: 'Yes', onPress: () => console.log('Re-investigation started')},
        {
          text: 'No',
          onPress: () => console.log('Re-investigation cancelled'),
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.Main_Container}>
      <Text style={styles.Main_title}>Profile</Text>
      <View style={styles.profileHeader}>
        <Image
          style={styles.profilePic}
          source={{uri: 'https://via.placeholder.com/150'}}
        />
        <Text style={styles.name}>User Name</Text>
      </View>
      <Text style={styles.continueQuestTitle}>Ongoing Quest</Text>
      <FlatList
        data={activeQuests}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.questItem}>
            <Text style={styles.questTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>{`${item.day}, ${item.date} | ${item.time}`}</Text>
          </View>
        )}
        style={styles.questsList}
      />
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => navigation.navigate('CompletedQuests')}>
        <Text style={styles.optionText}>Completed Quests</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionButton}
        onPress={handleChangePassword}>
        <Text style={styles.optionText}>조사하던거 재 조사</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton} onPress={handleLogout}>
        <Text style={styles.optionText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  Main_Container: {
    flex: 1,
    justifyContent: 'start', //세로축 정렬
    alignItems: 'end', //가로축 정렬
    padding: 20,
    backgroundColor: '#fff',
  },
  Main_title: {
    fontSize: 20,
    marginBottom: 30,
  },
  profileHeader: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  questItem: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  questTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  questsList: {
    width: '100%',
  },
  optionButton: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    marginTop: 20,
  },
  optionText: {
    fontSize: 18,
  },
  continueQuestTitle: {
    fontSize: 20,
    color: '#33B86B',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ProfileScreen;
