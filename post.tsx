import * as React from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

function HomeScreen({ navigation, route }) {
    React.useEffect(() => {
    if( route.params?.post) {

    }
   }, [route.params?.post]);

    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Create post"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
    </View>
  );
}

function CreatePostScreen({ navigation, route }) {
    const [postText, setPostText] = React.useState('');

    return (
    <>
        <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}/>

    <Button
    title="Done"
    onPress={() => {
    navigation.navigate({
    name: 'Home', // 홈스크린으로 이동하기.
    params: {post: postText },
    merge: true,
    });
   }}
  />
 </>
);
}

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator mode="model">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="CreatePost" component={CreatePostScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}