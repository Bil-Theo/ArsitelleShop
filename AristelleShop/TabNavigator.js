import { View, Text, Platform} from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Acceuil from './assets/interfaces/Acceuil'
import Notif from './assets/interfaces/notif'
import Entete from './assets/interfaces/entete'
import { Ionicons } from '@expo/vector-icons';

const TabNavigator = () => {
    const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator
            screenOptions = {({route})=>({
                        tabBarIcon: ({focused, color, size})=>{
                            let iconName;
                            let taille;
                            if(route.name == 'Acceuil'){
                                taille = 26
                                if(Platform.OS=='android'){
                                    iconName = focused ? 'md-home' : 'md-home-outline'
                                }
                                else{
                                    iconName = focused ? 'ios-home' : 'ios-home-outline'
                                }
                                
                            }
                            else if(route.name=='Notifications'){
                                taille = 28
                                if(Platform.OS=='android'){
                                    iconName = focused ? 'md-notifications' : 'md-notifications-outline'
                                }
                                else{
                                    iconName = focused ? 'ios-notifications' : 'ios-notifications-outline'
                                }
                            }

                            return <Ionicons name={iconName} size={taille} color={'black'}/>
                        },
                        header: ({ route }) => {
                            return (
                                <Entete title={route.name} />
                            );
                        },
                        
                    })
                    }
    >
        <Tab.Screen name ='Acceuil'  component={Acceuil}
            options = {{
                    tabBarLabel: '',
            }}
        />
        <Tab.Screen name = 'Notifications' component={Notif}
            options = {{
                    tabBarLabel: ''
            }}
        />
    </Tab.Navigator>
  )
}

export default TabNavigator