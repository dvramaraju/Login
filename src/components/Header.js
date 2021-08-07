import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.head}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    width: '100%',
    backgroundColor: '#00008B',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  text: {
    color: 'white',
    margin: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Header;
