import { Image, StyleSheet } from 'react-native';
import {Calendar} from 'react-native-calendars';

const MyCalendarComponent = () => {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Calendar
	style={styles.calendar}
  	// 캘린더 내 스타일 수정
	theme={{
		todayTextColor: 'black',
		textDayFontSize: 20,
		textDayFontWeight: 'bold',
		textMonthFontSize: 20,
		textMonthFontWeight: 'bold',
		textSectionTitleColor: 'rgba(138, 138, 138, 1)',
	}}
  	// 날짜 클릭 시 그 날짜 출력
	onDayPress={(day) => {console.log(day)}}
  	// 이전 달, 다음 달 날짜 숨기기
	hideExtraDays={true}
  	// 달 포맷 지정
	monthFormat={'M월'}
  	// 달이 바뀔 때 바뀐 달 출력
	onMonthChange={(month) => {console.log(month)}}
  	// 달 이동 화살표 구현 왼쪽이면 왼쪽 화살표 이미지, 아니면 오른쪽 화살표 이미지
	renderArrow={(direction) => direction === "left" ?
	<Image name="left" size={20} source={left}/> : <Image name="right" size={20} source={right} />}
/>
const styles = StyleSheet.create({
  calendar: {
    paddingBottom: 30,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 20
  }
});

export default MyCalendarComponent;
