import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native' // Importez NavigationContainer
import Screens from './Screens'
import TabNavigator from './TabNavigator'

const App = () => {
  return (
    <NavigationContainer> 
      <StatusBar hidden/>
      <Screens/>
    </NavigationContainer>
  )
}

export default App
