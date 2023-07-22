import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native' // Importez NavigationContainer
import Screens from './Screens'
import {RootSiblingParent} from 'react-native-root-siblings'

const App = () => {
  return (
    <NavigationContainer> 
      <RootSiblingParent>
        <StatusBar hidden/>
        <Screens/>
      </RootSiblingParent>
    </NavigationContainer>
  )
}

export default App
