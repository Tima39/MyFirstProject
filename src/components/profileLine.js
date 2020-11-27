import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ProfileLine = () => {
  return (
    <View style={styles.container}>
      <View style={{width: 25, height: 25, backgroundColor: 'green'}} />
      <Text style={styles.paragraph}>
      Мария Нащанская
      </Text>
    </View>
  );
}

export default ProfileLine;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 0,
    backgroundColor: 'white'
  },
  paragraph: {
    margin: 5,
    marginTop: 5,
    fontSize: 15,
    fontWeight: 'bold',
  },
  logo: {
    height: 228,
    width: 228,
  }
});