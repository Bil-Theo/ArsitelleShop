import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-navigation'

const Notif = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
               <Text>Bonjour</Text>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Notif