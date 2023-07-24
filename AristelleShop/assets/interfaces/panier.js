import {SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { panier, getPanier } from '../utilitaires/check'
import ItemPanier from './ItemPanier'

const Panier = ({navigation}) => {
  const user = {"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTY5MDEyMzA5NywiZXhwIjoxNjkwMjA5NDk3fQ.2zxwv-cklHa9E8LKaXUG2zw-a6n1b2VlftQJn-UzGG8", "user": [{"adresse": "Bebd ", "bonus": 0, "etat": 1, "id": 2, "mdps": "$argon2id$v=19$m=65536,t=3,p=4$jiyObIZVBvkVe9/QCZev6w$ejBEFtRHqMknxjMX2XIjhNaTof0oyr0fi+yIYbV/8s4", "nom": "BIL", "prenom": "Théo ", "tel": "+242068838343", "type": "client", "urlprofil": null}]}

  panier(user.user[0].id)
  const items = Object.values(JSON.parse(getPanier()))
  

  return (
    <SafeAreaView style = {{flex:1}}> 
      <FlatList data = {items} renderItem={({item})=> <ItemPanier item = {item} navigation={navigation} user={user} />} />
    </SafeAreaView>
  )
}

export default Panier