import React, {useState} from 'react';
import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.center}>Login</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
        onChangeText={mail => setEmail(mail)}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry={true}
        keyboardType="default"
        onChangeText={pass => setPassword(pass)}
      />
      <Text
        onPress={() => {
          auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => navigation.navigate('Home'))
            .catch(error => Alert.alert(error));
        }}
        style={styles.button}>
        Login
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    backgroundColor: '#87CEFA',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    marginTop: 10,
    fontFamily: 'Roboto-Medium',
  },
  center: {
    fontFamily: 'Roboto-BoldItalic',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
  },
  input: {
    borderWidth: 0.5,
    marginTop: 10,
    borderRadius: 10,
    fontFamily: 'Roboto-Black',
  },
});

export default Login;
