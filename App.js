import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>
      <View style={styles.container2}>

        <Text style={styles.title}>Bem-vindo! Faça o login no nosso sistema!</Text>
        <View style={styles.camp}>
          <TextInput placeholder="User" style={styles.campo} />
          <TextInput secureTextEntry placeholder="Password" style={styles.campo2} />
        </View>
        <TouchableOpacity style={styles.button}>LOGAR</TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    backgroundColor: '#1c1c1c',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
    paddingBottom: '50px',
    paddingTop: '50px',
    paddingRight: '10px',
    paddingLeft: '10px',
    shadowColor: '#c2ffff',
    shadowRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 30,
    marginBottom: 50,
  },
  button: {
    color: 'white',
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 5,
    width: 70,
    height: '20px',
  },
  campo: {
    color: 'white',
    fontSize: '16',
    height: 18,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#6e6e6e',
    padding: 10,
  },
  campo2: {
    color: 'white',
    fontSize: '16',
    height: 18,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#6e6e6e',
    padding: 10,
  },
  camp: {

  },
});
