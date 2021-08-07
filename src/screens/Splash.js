import React, {Component, useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import auth from '@react-native-firebase/auth';

const Splash = ({navigation}) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    setTimeout(() => {
      if (!user) {
        navigation.navigate('Login');
      } else {
        navigation.navigate('Home');
      }
    }, 3000);
    return subscriber;
  }, []);

  return (
    <View styles={styles.Container}>
      <Image source={require('../images/splash.png')} styles={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 80,
    width: 120,
  },
});

export default Splash;
