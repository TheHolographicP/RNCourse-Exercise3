import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from 'screens/Categories';
import CategoryView from 'screens/CategoryView';
import type { RootStackParamList } from 'types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();


export default function App() {
  return (
    <NavigationContainer>
        <StatusBar/>
        <Stack.Navigator>
          <Stack.Screen name="CategoriesList" component={CategoriesScreen} />
          <Stack.Screen name="CategoryView" component={CategoryView} />
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
