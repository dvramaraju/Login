import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import database from '@react-native-firebase/database';

const ViewProduct = () => {
  // /Vegetables/Bean
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  useEffect(
    () =>
      database()
        .ref('/Vegetables/Bean')
        .on('value', snapshot => {
          console.log(snapshot.val());
          // setName(snapshot.val().Name);
          // setPrice(snapshot.val().Price);
          // setDescription(snapshot.val().Description);
        }),
    [],
  );

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.fontFamily}>Name: </Text>
          <Text style={styles.fontFamily}>Price: </Text>
          <Text style={styles.fontFamily}>Description: </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.fontFamily}>{name}</Text>
          <Text style={styles.fontFamily}>{price}</Text>
          <Text style={styles.fontFamily}>{description}</Text>
        </View>
      </View>
    </View>
  );
};

export default ViewProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontFamily: {
    fontFamily: 'Roboto-BoldItalic',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
});
