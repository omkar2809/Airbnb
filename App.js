import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import Router from './src/navigation/Router';

export default function App() {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <Router />
    </>
  );
}
