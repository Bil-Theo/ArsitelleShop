import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-navigation'
import Item from './Item'
import { products } from '../../test/data1'

const Notif = () => {
  return (
    <SafeAreaView>
        <View style={{height: '100%',}}>
            <Text>Notifs</Text>
        </View>   
    </SafeAreaView>
  )
}

export default Notif