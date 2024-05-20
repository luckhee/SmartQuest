import * as React from 'react';
import {useState} from 'react';
// eslint-disable-next-line prettier/prettier
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {NavigationContainer} from '@react-navigation/native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Calendar} from 'react-native-calendars';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Day from 'react-native-calendars/src/calendar/day';
import RewardScreen from './RewardScreen';
import DetailPage from './DetailPage';
import QuestScreen from './QuestScreen';
import ChoiceQuest from './ChoiceQuest';

const Calendar1 = () => {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Calendar
      // 날짜 선택 시 호출되는 함수
      onDayPress={day => {
        console.log('selected day', day);
      }}
      Theme={{
        todayTextColor: 'black',
        textDayFonSize: 20,
        textDyaFontWeight: 'bold',
        textMonthFontSize: 20,
        textMonthFontWeight: 'bold',
        textSectionTitleColor: 'rgba(138, 138, 138, 1)',
      }}
      hideExtraDays={true}
      // monthFormat={'M월'} // 한글로 바꿀거면 주석 해제
      onMonthChange={month => {
        console.log(month);
      }}
      // renderArrow={direction =>
      //   direction === 'left' ? (
      //     <Image name="left" size={20} source={left}/> : <Image name="right" size={20} source={right} />}
      //     />
      // )}
      markedDates={{
        '2024-05-12': {selected: true, marked: true, selectedColor: 'green'},
        '2024-05-13': {selected: true, marked: true, selectedColor: 'red'},
        '2024-05-18': {selected: true, marked: true, selectedColor: 'red'},
        // '2024-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
      }}
    />
  );
};

const eventsData = [
  {
    id: '1',
    title: 'Neighborhood Visit Mission',
    description: "'Neighbors' Homes within Walking Distance",
    // icon: 'movie',
    date: '12',
    day: 'Sun',
    time: '19:00-21:45',
    color: 'white',
    statusColor: 'green',
    status: 'Complite',
  },
  {
    id: '2',
    title: 'Participation in Team-Based Sports or Activities',
    description: 'Schools and Educational Institutions',
    date: '13',
    day: 'Mon',
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
    day: 'Sat',
    time: '10:00-13:00',
    // icon: 'movie',
    color: 'white',
    statusColor: 'red',
    status: 'continue',
  },
];

const EventItem = ({
  title,
  description,
  date,
  day,
  color,
  time,
  status,
  statusColor,
}) => {
  return (
    <View style={styles.eventItme}>
      <View style={[styles.dateBox, {backgroundColor: color}]}>
        <Text style={styles.dateText}>{date}</Text>
        <Text style={styles.dayText}>{day}</Text>
      </View>
      <View style={styles.QuestContainer}>
        <Text style={styles.eventTitle}>{title}</Text>
        <Text style={styles.eventDescription}>{description}</Text>
        <View style={styles.timeAndStatusContainer}>
          <Text style={styles.eventDescription}>{time}</Text>
          <View style={[styles.statusBox, {backgroundColor: statusColor}]}>
            <Text style={styles.eventStatus}>{status}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const Stack = createNativeStackNavigator();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function MainScreen({navigation}) {
  const handleQuest = () => {
    navigation.navigate('QuestScreen');
  };

  const handleChoice = () => {
    navigation.navigate('ChoiceQuest');
  };

  const handleReward = () => {
    navigation.navigate('Reward');
  };
  const [showcalendar, setShowCalendar] = useState(false);

  const navigateTODetailPage = item => {
    navigation.navigate('Detail', {item});
  };

  const toggleCalendar = () => {
    setShowCalendar(!showcalendar);
  };
  return (
    // 부모 컨테이너는 Main_container
    <View style={styles.Main_Container}>
      <View style={styles.timeAndStatusContainer1}>
        <Text style={styles.Main_title}>Quest List</Text>
        <TouchableOpacity style={styles.buttonStyle} onPress={handleReward}>
          <Text style={styles.Main_title1}>💰</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.QuestButton}></View>
      <TouchableOpacity onPress={toggleCalendar}>
        <Text style={styles.Month_title}>May</Text>
      </TouchableOpacity>
      {showcalendar && (
        //달력에 대한 별도의 콘테이너
        <View style={styles.calendarContainer}>
          <Calendar1 />
        </View>
      )}
      <FlatList
        data={eventsData}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigateTODetailPage(item)}>
            <EventItem
              title={item.title}
              description={item.description}
              // icon={item.icon}
              color={item.color}
              date={item.date}
              day={item.day}
              time={item.time}
              status={item.status}
              statusColor={item.statusColor}
            />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleChoice}>
        <Text style={styles.buttonText}>Quest Add</Text>
      </TouchableOpacity>
    </View>
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function mainscreen() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
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
            name="Detail"
            component={DetailPage}
            options={{headerTitle: ''}}
          />
          <Stack.Screen
            name="QuestScreen"
            component={QuestScreen}
            options={{headerTitle: ''}}
          />
          <Stack.Screen
            name="ChoiceQuest"
            component={ChoiceQuest}
            options={{headerTitle: ''}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  QuestContainer: {
    marginLeft: 10,
  },
  eventDetails: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  timeAndStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeAndStatusContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  eventStatus: {
    fontWeight: 'bold',
    fontSize: 16,
    margin: 4,
    // marginLeft: 65,
    color: 'white',
  },
  dayText: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 10,
  },
  dateBox: {
    width: 30,
    height: 48,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  statusBox: {
    // width: 30,
    // height: 20,
    borderRadius: 5,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginLeft: 45,
  },
  dateText: {
    color: 'black',
    fontWeight: 'bold',
  },
  eventItme: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 12,
    padding: 10,
    borderRadius: 20,
  },
  calendarContainer: {
    // alignItems: 'center',
    width: '100%',
    // height: 250,
    paddingBottom: 5,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 20,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  eventDescription: {
    fontSize: 14,
    color: '#000000',
  },
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
    // marginBottom: 30,
  },
  Main_title1: {
    // fontSize: 20,
    // marginBottom: 30,
    // textAlign: 'right',
  },
  Month_title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#0047AB',
  },
  buttonStyle: {
    backgroundColor: 'grey',
    width: 30, // 버튼의 너비를 조절
    height: 30, // 버튼의 높이를 조절
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 30,
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
    marginBottom: 20,
    width: '100%',
    backgroundColor: '#0047AB',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  QuestButton: {
    marginTop: 10,
    marginBottom: 20,
    width: '100%',
    backgroundColor: '#000',
    // borderRadius: 5,
    padding: 0.1,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default MainScreen;
