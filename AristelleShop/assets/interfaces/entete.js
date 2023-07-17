import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import styles from '../style/styles'

const Entete = ({title}) => {

  const menu = ()=>{
    console.log('Menu')
  }

  const moreInfo = ()=>{
    console.log("Plus d'info")
  }
  return (
    <View>
        <View style={styles.header}>
          <TouchableOpacity onPress={menu}>
            <MaterialIcons name='menu' color='gray' size={25}/>
          </TouchableOpacity>
          <Text style={{fontSize: 20, fontWeight: 'bold',}}>{title}</Text>
          <TouchableOpacity onPress={moreInfo}>
            <MaterialIcons name='computer' size={25} color='gray'/>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default Entete