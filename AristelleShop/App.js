import React from 'react'
import { NavigationContainer } from '@react-navigation/native' // Importez NavigationContainer
import Screens from './Screens'
import TabNavigator from './TabNavigator'

const App = () => {
  return (
    <NavigationContainer> 
      <Screens/>
    </NavigationContainer>
  )
}

export default App
