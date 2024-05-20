import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>HomeScreen</Text>
    </View>
    );
}

function DetailScreen () {
    return (
    <View style={{flex : 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> DetailScreen</Text>
    </View>
    );
}

const Stack = createNativeStackNavigator();

function App () {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Detail" component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    ); // 네비게이션 관련 컴포넌트는 네비게이션 콘테이너 안에서 작성
} // 스택은 후입선출 새로운 화면으로 이동할 때마다 스택에 화면을 추가하고 화면을 뒤로가거나 닫을 때 스택에서 화면을 제거
export default App; // 전체 애플리케이션의 메인 진입점이 app