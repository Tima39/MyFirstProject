import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.paragraph}>
        Не удается загрузить приложение.
        Проверьте подключение к Интернету и перезагрузите страницу.
      </Text>
      <Text style={styles.paragraph2}>
        Повторить попытку
      </Text>
    </View>
  );
}

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 30,
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph2: {
    margin: 24,
    marginTop: 0,
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue',
  },
  logo: {
    height: 228,
    width: 228,
  }
});