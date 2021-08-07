import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import database from '@react-native-firebase/database';
import Header from '../components/Header';

const AddProduct = ({navigation}) => {
  // /Vegetables/Bean
  const [Name, setName] = useState('');
  const [Price, setPrice] = useState('');
  const [Description, setDescription] = useState('');

  return (
    <View>
      <Header title="Add Product" />
      <View style={styles.container}>
        <TextInput
          placeholder="Name"
          value={Name}
          style={styles.input}
          onChangeText={name => setName(name)}
        />
        <TextInput
          placeholder="Price"
          value={Price}
          style={styles.input}
          keyboardType="numeric"
          onChangeText={price => setPrice(price)}
        />
        <TextInput
          placeholder="Description"
          value={Description}
          style={styles.input}
          onChangeText={desc => setDescription(desc)}
        />
        <TouchableOpacity
          onPress={() => {
            Name !== '' && Price !== '' && Description !== ''
              ? (database().ref('/Vegetables/:id').set({
                  Name: Name,
                  Price: Price,
                  Description: Description,
                }),
                navigation.navigate('Home'))
              : Alert.alert(
                  'Please Enter Name, Price, and Description for the product',
                );
          }}
          style={styles.button}>
          <Text style={styles.center}>Add Product</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#87CEFA',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    marginTop: 10,
    fontFamily: 'Roboto-Medium',
  },
  center: {
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    // margin: 20,
    marginTop: 80,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  input: {
    borderWidth: 0.5,
    marginTop: 10,
    borderRadius: 10,
    height: 20,
    fontFamily: 'Roboto-Italic',
  },
});
