import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';

const DetailPage = () => {
  const route = useRoute();
  const {item} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.QuestButton}></View>
      {/* 'QuestButton'을 'questButton'으로 수정하였습니다. 스타일 이름은 일반적으로 camelCase를 사용합니다. */}
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.detail}>Date: {item.date}</Text>
      <Text style={styles.detail}>Day: {item.day}</Text>
      <Text style={styles.detail}>Time: {item.time}</Text>
      <Text style={styles.detail}>Status: {item.status}</Text>
      <Text style={styles.detail}>💰: 3</Text>
      <View
        style={[styles.statusContainer, {backgroundColor: item.statusColor}]}>
        <Text style={styles.statusText}>{item.status}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: '#666',
    marginBottom: 15,
  },
  detail: {
    fontSize: 16,
    color: '#444',
    marginBottom: 5,
  },
  statusContainer: {
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  statusText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  QuestButton: {
    marginTop: 10,
    marginBottom: 20,
    width: '100%',
    backgroundColor: '#000',
    // borderRadius: 5,
    padding: 0.1,
  },
});

export default DetailPage;
