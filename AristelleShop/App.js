import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native' // Importez NavigationContainer
import Screens from './Screens'

const App = () => {
  return (
    <NavigationContainer> 
      <Screens/>
    </NavigationContainer>
  )
}

export default App
