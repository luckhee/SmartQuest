import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  Main_Container: {
    flex: 1,
    // justifyContent: 'start',
    // alignItems: 'end',
    padding: 20,
    backgroundColor: '#fff',
  },
  Main_title: {
    fontSize: 20,
  },
  Product_details: {
    marginBottom: 10,
    width: '100%',
    backgroundColor: '#eef2f6',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  page: {
    width: '100%', // 스크린 너비와 같게 설정
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 120,
  },
  question0: {
    fontSize: 20,
    marginBottom: 20,
    marginTop: 40,
    // marginLeft: 30,
  },
  question1: {
    fontSize: 23,
    marginBottom: 20,
    marginTop: 45,
  },
  SubAnswer: {
    fontSize: 15,
    // marginBottom: 20,
    color: 'grey',
    // marginLeft: 30,
  },
  button: {
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  submitButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'skyblue',
    borderRadius: 5,
  },
  Button_container: {
    flexDirection: 'row', // 가로로 배열하기 위해 flexDirection을 'row'로 설정
    alignItems: 'center', // 세로축(center)을 기준으로 아이템들을 정렬
  },
  loginButton: {
    marginTop: 10,
    marginBottom: 20,
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
  itemContainer: {
    // flexDirection: 'row',
    // alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    // 추가 스타일, 예: 테두리 스타일
  },
});
