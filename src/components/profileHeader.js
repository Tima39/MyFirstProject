import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.paragraph}>
      Мария Нащанская
      </Text>
      <Text style={styles.paragraph2}>
      +7(921)611-85-47
      </Text>
      <Text style={styles.paragraph2}>
      s.maria.k@gmail.com
      </Text>
    </View>
  );
}

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    padding: 0,
    backgroundColor: 'white'
  },
  paragraph: {
    margin: 5,
    marginTop: 5,
    fontSize: 15,
    fontWeight: 'bold',
  },
  paragraph2: {
    margin: 5,
    marginTop: 0,
    fontSize: 10,
    fontWeight: 'bold',
    color: 'gray',
  },
  logo: {
    height: 228,
    width: 228,
  }
});