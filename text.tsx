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
import {Calendar} from 'react-native-calendars';

const Calendar1 = () => {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Calendar
      // 날짜 선택 시 호출되는 함수
      onDayPress={day => {
        console.log('selected day', day);
      }}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        borderWidth: 1,
        borderColor: '#e0e0e0',
      }}
      theme={{
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#b6c1cd',
        selectedDayBackgourndColor: '#00adf5',
        selectedDayTextColor: '#ffffff',
        todayTextcolor: '#00adf5',
        dayTextColor: '#2d4150',
        textDisabledColor: '#d9e1e8',
        dotColor: '#00adf5',
        selectedDotColor: '#ffffff',
        arrowColor: 'orange',
        monthTextColor: 'blue',
        textDayFontWeight: '300',
        textMonthFontWeight: 'bold',
        textDayHeaderFontWeight: '300',
        textDayFontSize: 16,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 16,
        'stylesheet.calendar.header': {
          week: {
            marginTop: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
          dayHeader: {
            fontWeight: '600',
          },
        },
        'stylesheet.day.basic': {
          base: {
            borderColor: '#e0e0e0',
            borderWidth: 1,
          },
        },
      }}
      markedDates={{
        '2023-12-08': {selected: true, marked: true, selectedColor: 'blue'},
        '2023-12-16': {marked: true},
        '2023-12-20': {marked: true, dotColor: 'red', activeOpacity: 0},
      }}
    />
  );
};

function MainScreen({navigation}) {
  const [showcalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar(!showcalendar);
  };
  return (
    // 부모 컨테이너는 Main_container
    <View style={style.Main_Container}>
      <Text style={style.Main_title}>퀘스트 목록</Text>
      <TouchableOpacity onPress={toggleCalendar}>
        <Text style={style.Month_title}>9월</Text>
      </TouchableOpacity>
      {showcalendar && (
        //달력에 대한 별도의 콘테이너
        <View style={style.calendarContainer}>
          <Calendar1 />
        </View>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  calendarContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
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
    backgroundColor: 'lightgreen',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default MainScreen;
