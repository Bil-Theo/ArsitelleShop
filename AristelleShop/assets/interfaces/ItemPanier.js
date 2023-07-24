import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons' 
import styles from '../style/stylePanier'

const ItemPanier = ({item, navigation, user}) => {

  const details = ()=>{
    navigation.navigate('Details', {
      'user': user,
      'action': 'supprime',
      'item': item
    })
  }

  const supprime = ()=>{
    console.log('Supprimes')
  }
  return (
    <View style={styles.contenair}>
      <TouchableOpacity onPress={details}>
        <Image source = {{uri: item.urlImage}} style={styles.image}/>
      </TouchableOpacity>
      <View style={{flex: 1, alignItems: 'center', flexDirection: 'row', paddingLeft: '7%'}}>
        <TouchableOpacity onPress={details}><Text style={styles.text}>{item.title}</Text></TouchableOpacity>
        <TouchableOpacity style={{position: 'absolute', right: '3%'}} onPress={supprime}>
          <Ionicons name='trash-outline' color='red' size={30} />
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default ItemPanier