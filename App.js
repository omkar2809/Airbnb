import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Post from './src/components/Post';
import HomeScreen from './src/screens/Home';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        <Post/>
      </SafeAreaView>
    </>
  );
}
