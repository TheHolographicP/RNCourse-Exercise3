import { useState } from 'react'
import { StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function App() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.screensContainer} >
        <Text>App</Text>
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
    padding:8
  },
  imageBkg: {
    flex:1,
  }
});
