import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const QuestCreator = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [quests, setQuests] = useState([]);
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);

  const handleCreateQuest = () => {
    if (title && description && date && time) {
      const newQuest = {
        id: Date.now().toString(),
        title,
        description,
        date,
        time,
      };
      setQuests([...quests, newQuest]);
      setTitle('');
      setDescription('');
      setDate('');
      setTime('');
    }
  };

  const handleDayPress = day => {
    setDate(day.dateString);
  };

  const showTimePicker = () => {
    setTimePickerVisible(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisible(false);
  };

  const handleConfirmTime = selectedTime => {
    const currentTime = selectedTime || new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    setTime(
      `${hours < 10 ? '0' + hours : hours}:${
        minutes < 10 ? '0' + minutes : minutes
      }`,
    );
    hideTimePicker();
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={quests}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <View>
            <Text style={styles.label}>Quest Title:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter quest title"
              value={title}
              onChangeText={setTitle}
            />
            <Text style={styles.label}>Quest Description:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter quest description"
              value={description}
              onChangeText={setDescription}
            />
            <Text style={styles.label}>Select Date:</Text>
            <Calendar
              onDayPress={handleDayPress}
              markedDates={{
                [date]: {selected: true, marked: false, selectedColor: 'blue'},
              }}
              theme={{
                todayTextColor: 'black',
                textDayFontSize: 20,
                textMonthFontSize: 20,
                textMonthFontWeight: 'bold',
                textSectionTitleColor: 'rgba(138, 138, 138, 1)',
              }}
            />
            <Text style={styles.label}>Select Time:</Text>
            <TouchableOpacity
              style={styles.timeButton}
              onPress={showTimePicker}>
              <Text style={styles.timeButtonText}>
                {time ? time : 'Select Time'}
              </Text>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isTimePickerVisible}
              mode="time"
              onConfirm={handleConfirmTime}
              onCancel={hideTimePicker}
            />
            <Button title="Create Quest" onPress={handleCreateQuest} />
          </View>
        }
        renderItem={({item}) => (
          <View style={styles.questItem}>
            <Text style={styles.questTitle}>{item.title}</Text>
            <Text style={styles.questDescription}>{item.description}</Text>
            <Text style={styles.questDate}>Date: {item.date}</Text>
            <Text style={styles.questDate}>Time: {item.time}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
    backgroundColor: '#fff',
    flex: 1,
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
  timeButton: {
    padding: 10,
    backgroundColor: '#0047AB',
    borderRadius: 4,
    marginBottom: 16,
    alignItems: 'center',
    width: '30%',
  },
  timeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  questItem: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  questTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  questDescription: {
    fontSize: 14,
  },
  questDate: {
    fontSize: 14,
    color: 'gray',
  },
});

export default QuestCreator;
