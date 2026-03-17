import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from 'screens/Categories';
import CategoryView from 'screens/CategoryView';
import type { RootStackParamList } from 'types/navigation';
import {MealView} from 'screens/MealView';
import Colors from 'constants/colors';

const Stack = createNativeStackNavigator<RootStackParamList>();


export default function App() {

  const headerTextStyle = {
    color: 'white',
  }
  const contentStyle = {
    backgroundColor: Colors.primary4,
  }
  
  return (
    <NavigationContainer>
        <StatusBar style='light'/>
        <Stack.Navigator 
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.primary1,
            },
            headerTintColor: 'white',
            headerTitleStyle: headerTextStyle,
            contentStyle: contentStyle}}>
          <Stack.Screen 
            name="CategoriesList"
            component={CategoriesScreen}
            options={{title:'Meal Categories'}}
          />
          <Stack.Screen 
            name="CategoryView"
            component={CategoryView}
          />
          <Stack.Screen 
            name="MealView"
            component={MealView}
          />
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
