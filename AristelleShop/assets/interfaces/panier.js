import {SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { panier, getPanier } from '../utilitaires/check'
import ItemPanier from './ItemPanier'

const Panier = () => {
  panier(1)
  const items = [{id: 1}, {id: 2}]
  const essa = Object.values(getPanier())

  console.log(essa)


  return (
    <SafeAreaView style = {{flex:1}}> 
      <FlatList data = {items} renderItem={({item, index})=> <ItemPanier item = {item} index={index} />} /> 
    </SafeAreaView>
  )
}

export default Panier