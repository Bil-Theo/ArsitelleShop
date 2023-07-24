import { View, Text, RefreshControl, ScrollView, FlatList, ImageBackground, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Font from 'expo-font';
import Item from './Item'
import { products } from '../../test/data1'


const Acceuil = ({navigation, route}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [police, setPolice] = useState(false)
  const user = {"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTY5MDEyMzA5NywiZXhwIjoxNjkwMjA5NDk3fQ.2zxwv-cklHa9E8LKaXUG2zw-a6n1b2VlftQJn-UzGG8", "user": [{"adresse": "Bebd ", "bonus": 0, "etat": 1, "id": 2, "mdps": "$argon2id$v=19$m=65536,t=3,p=4$jiyObIZVBvkVe9/QCZev6w$ejBEFtRHqMknxjMX2XIjhNaTof0oyr0fi+yIYbV/8s4", "nom": "BIL", "prenom": "Théo ", "tel": "+242068838343", "type": "client", "urlprofil": null}]}
  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        fontA:  require('../fonts/Lugrasimo-Regular.ttf'), // Remplacez 'NomDeLaPolice' par le nom réel de votre fichier .ttf (sans l'extension)
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
        <ScrollView style={{height: '100%',}}>
            <View style={{padding: '10%', 
                paddingTop: '5%', flexDirection: 'column', marginBottom: '0%'}}>
              <Text style={{fontWeight: 'bold', fontSize: '25%', fontFamily: 'fontA'}}>La mode</Text>
              <Text style={{color:'gray',fontWeight : 'bold', fontSize: '20%', fontFamily: 'fontA'}}>Vous va si bien</Text>
           </View>
          <FlatList  data={products} renderItem={({item})=> <Item item={item} navigation={navigation} user={user} />} keyExtractor={(item) => item.title}/>
        </ScrollView> 

    </SafeAreaView>
  )
}

export default Acceuil