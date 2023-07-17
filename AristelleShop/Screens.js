import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from './assets/interfaces/loginScreen'
import SignupScreen from './assets/interfaces/signupScreen'
import TabNavigator from './TabNavigator'

const stack = createStackNavigator()

const Screens = () => {
    return (
        <stack.Navigator>
            <stack.Screen name='Login' component = {LoginScreen}
                options={{
                    headerTitle: 'Authentification',
                    headerStyle:{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }

                }}
            />
            <stack.Screen name='Inscription' component = {SignupScreen}
                options={{
                    headerTitle: 'Création de Compte',
                    headerStyle:{
                        backgroundColor: '#f7f7f7',
                        borderBottomColor: 'black', 
                    }, 
                    headerTintColor: 'black',
                    headerBackTitleVisible: false
                }}
            />
            <stack.Screen name = 'EcranAcceuil' component = {TabNavigator}
                options={{
                    headerShown: false,
                }}
            />
        </stack.Navigator>
      )
}

export default Screens