import * as React from 'react';
import { Button, View, Text, Textinput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
    React.useEffect(() => {
    if( route.params?.post) {

    }
   }, [route.params?.post]);

    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button
            title="Create post"
            onPress={() => {navigation.navigate('createpost')} />
        <Text style={{ margin : 10 }}>Post: {route.params?.post}</Text>
    </View>
    );
}

function CreatePostScreen({ navigation, route }) {
    const {postText, setPostText} = React.useState('');

    return (
    <View style={{flex : 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> DetailScreen</Text>
        <Text> itemId: {JSON.stringify(itemId)}</Text>
        <Button
            title=" update Param"
            onPress={() => navigation.setParams({
            itemId: Math.floor(Math.random() * 100),
            })
            }
            />
    </View>// Stack.Screen에서 정의된 이름으로 이동 //버튼으로 여러개의 스크린으로 돌아가는 설정 할 수 있음. //popToTop은 네비게이션 스택 중에 맨 처음으로 돌아가는 메소드
    );// itemId,otherParam는 한 스크린에서 다른 스크린으로 데이터를 전송할 때 쓰는 메소드.
    // itemId는 고유 식별자를 나타내는데 사용, otherParam는 일반적인 용도 스크린간에 필요한 추가적인 정보나 설정값을 전달하는데 사용
}

const Stack = createNativeStackNavigator();

function App () {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }}/>
                <Stack.Screen name="Detail" component={DetailScreen} initialParams={{ itemId: 42 }} />
            </Stack.Navigator>
        </NavigationContainer>
    ); // 네비게이션 관련 컴포넌트는 네비게이션 콘테이너 안에서 작성
} // 스택은 후입선출 새로운 화면으로 이동할 때마다 스택에 화면을 추가하고 화면을 뒤로가거나 닫을 때 스택에서 화면을 제거
export default App; // 전체 애플리케이션의 메인 진입점이 app