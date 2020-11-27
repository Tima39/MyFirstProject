/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import ProfileHeader from './src/components/profileHeader';
import ProfileLine from './src/components/profileLine';

const App = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <ProfileHeader />
      <ProfileLine />
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
