import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import database from '@react-native-firebase/database';
import Header from '../components/Header';

let data = [];
const Home = ({navigation}) => {
  const [info, setInfo] = useState([]);

  const GetData = async () => {
    await database()
      .ref('/groceries')
      .once('value')
      .then(snapshot => {
        data = snapshot.val();
        setInfo(data);
        // console.log('Data 1: ', data.id);
        data.map(({ins}) => console.log(ins));
        // console.log('info: ', info);
      })
      .catch(error => console.log('error', error));
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <>
      <Header title="Home" />
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({item}) => {
            <View>
              <Text>hell {item.name}</Text>
            </View>;
            // console.log('item: ', item);
          }}
        />
        {/* <View style={styles.row}>
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
        </View> */}
        <TouchableOpacity
          style={{backgroundColor: 'blue', padding: 10, margin: 10}}
          onPress={() => navigation.navigate('AddProduct')}>
          <Text
            style={{
              color: 'white',
            }}>
            Add Product
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Home;

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
