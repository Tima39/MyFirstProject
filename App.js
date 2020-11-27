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

const App = () => {
  return (
    <View style={{backgroundColor: 'green', flex: 1}}>
    <ProfileHeader />
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
