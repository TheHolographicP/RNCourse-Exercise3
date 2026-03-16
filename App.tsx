import { useState } from 'react'
import { StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import CategoriesScreen from 'screens/Categories';


export default function App() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.screensContainer} >
        <StatusBar style="light" />
        <CategoriesScreen/>
      </SafeAreaView> 
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
  },
  screensContainer: {
    flex:1,
    padding:8,
    backgroundColor: '#24180f',
  },
});
