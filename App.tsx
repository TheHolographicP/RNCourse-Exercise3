import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from 'screens/Categories';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
        <StatusBar/>
        <Stack.Navigator>
          <Stack.Screen name="Categories" component={CategoriesScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
  },
  screensContainer: {
    flex:1,
    backgroundColor: '#24180f',
  },
});
