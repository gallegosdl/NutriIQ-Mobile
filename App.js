// App.js
import * as React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { ThemeProvider } from './src/contexts/ThemeContext'; // adjust path if needed

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
        <HomeScreen />
      </SafeAreaView>
    </ThemeProvider>
  );
}
