import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from './assets/interfaces/loginScreen'
import SignupScreen from './assets/interfaces/signupScreen'

const stack = createStackNavigator()

const Screens = () => {
    return (
        <stack.Navigator>
            <stack.Screen name='Login' component = {LoginScreen}/>
            <stack.Screen name='Inscription' component = {SignupScreen}/>
        </stack.Navigator>
      )
}

export default Screens