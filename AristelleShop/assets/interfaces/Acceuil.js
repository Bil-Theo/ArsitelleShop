import { View, Text, RefreshControl, ScrollView, FlatList, ImageBackground, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Font from 'expo-font';


const Acceuil = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [police, setPolice] = useState(false)

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'fontA':  require('../fonts/Lugrasimo-Regular.ttf'), // Remplacez 'NomDeLaPolice' par le nom réel de votre fichier .ttf (sans l'extension)
      });
    }
    loadFont();
    setPolice(true)
  }, []);



  const onRefresh = () => {

    setRefreshing(true);

    // Exemple d'appel API fictif (remplacez cela par votre code de récupération de données)
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
  return (
    <SafeAreaView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
      style = {{flex: 1}}  
    >
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          {police&& (
            <View style={{padding: '10%', 
              paddingTop: '5%', flexDirection: 'column'}}>
              <Text style={{fontWeight: 'bold', fontSize: '25%', fontFamily: 'fontA'}}>La mode</Text>
              <Text style={{color:'gray',fontWeight : 'bold', fontSize: '20%', fontFamily: 'fontA'}}>Vous va si bien</Text>
          </View>
          )}
        </ScrollView>

    </SafeAreaView>
  )
}

export default Acceuil