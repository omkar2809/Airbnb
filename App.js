import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import DestinationSearch from './src/screens/DestinationSearch';
import Guests from './src/screens/Guests';
import HomeScreen from './src/screens/Home';
import SearchResults from './src/screens/SearchResults';
// import feed from './assets/data/feed'

export default function App() {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <SearchResults /> */}
        {/* <DestinationSearch /> */}
        <Guests />
      </SafeAreaView>
    </>
  );
}
