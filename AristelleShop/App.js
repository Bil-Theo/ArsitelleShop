import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const getData = ()=>{ 
    fetch('http://localhost:8080/api/stuff')
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      console.log(data)
    })
    .catch(error => {
      // Gérer les erreurs de requête réseau ici
      console.error('Erreur de requête réseau :', error);
    });

  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    <TouchableOpacity style = {styles.button} onPress={getData}>
      <Text>Toucher ici</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  
  }
})
