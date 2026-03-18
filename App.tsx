import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from 'screens/Categories';
import CategoryView from 'screens/CategoryView';
import type { RootStackParamList, RootDrawerParamList } from 'types/navigation';
import { MealView } from 'screens/MealView';
import { FavoritesView } from 'screens/FavoritesView';

import Colors from 'constants/colors';
import { FavoritesContextProvider } from 'store/context/favorites-context';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();


const headerTextStyle = {
  color: 'white',
}
const contentStyle = {
  backgroundColor: Colors.primary1,
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary1,
        },
        headerTintColor: 'white',
        headerTitleStyle: headerTextStyle,
        drawerContentStyle: contentStyle,
        drawerActiveBackgroundColor: Colors.primary4,
        drawerActiveTintColor: Colors.primary1,
        drawerInactiveTintColor: Colors.primary4,
      
      }}
    >
      <Drawer.Screen 
        name="CategoriesList"
        component={CategoriesScreen}
        options={{
          title:'Meal Categories',
          drawerIcon: ({color, size}) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen 
        name="FavoritesView" 
        component={FavoritesView} 
        options={{
          title: 'Favorites',
          drawerIcon: ({color, size}) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}


export default function App() {

  
  return (
    <NavigationContainer>
      <FavoritesContextProvider>
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
            name="HomeScreen"
            component={DrawerNavigator}
            options={{            
              headerShown: false,
              title:'All Categories',
            }}
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
      </FavoritesContextProvider>
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
