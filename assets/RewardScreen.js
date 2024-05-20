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
    marginBottom: 30,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  imageContainer: {
    width: '33%', // 컨테이너 너비의 1/3을 차지
    padding: 10, // 이미지와 컨테이너 간의 여백
  },
  itemView: {
    flex: 1,
    flexDirection: 'column',
    // alignItems: 'center',
    margin: 1,
    marginVertical: 20,
  },
  image: {
    borderRadius: 5,
    width: 100, // 이미지의 너비를 조정하세요.
    height: 100, // 이미지의 높이를 조정하세요.
  },
  eventItme: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  itemdiscount: {
    marginTop: 5,
    textAlign: 'left',
    color: 'red',
  },
  itemTitle: {
    marginTop: 5,
    textAlign: 'left',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  description: {
    marginTop: 5,
    marginBottom: 3,
    textAlign: 'left',
    color: 'grey',
  },
  Titlecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  timeAndStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  point: {
    marginLeft: 5,
  },
  coinBox: {
    marginLeft: 40,
    backgroundColor: 'lightgreen',
    width: 40,
    height: 25,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: 10,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.3,
    // shadowRadius: 4.65,

    // elevation: 8,
  },
  RewardBox: {
    backgroundColor: 'grey',
    width: 30, // 버튼의 너비를 조절
    height: 30, // 버튼의 높이를 조절
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    // marginRight: 10,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.3,
    // shadowRadius: 4.65,

    // elevation: 8,
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
  possessionbotton: {
    marginBottom: 10,
    width: '100%',
    backgroundColor: 'lightgray',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  morebotton: {
    marginBottom: 50,
    width: '100%',
    backgroundColor: 'lightgray',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  morebuttonText: {
    color: 'black',
    fontSize: 18,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  RewardSearch: {
    // marginBottom: 3,
    // marginLeft: 1,
  },
});
