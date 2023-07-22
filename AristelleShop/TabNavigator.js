import { View, Text, Platform} from 'react-native'
import React, { useState } from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Acceuil from './assets/interfaces/Acceuil'
import Notif from './assets/interfaces/notif'
import Entete from './assets/interfaces/entete'
import Panier from './assets/interfaces/panier'
import { Ionicons } from '@expo/vector-icons';
import styles from './assets/style/styles'
import { panier, getPanier } from './assets/utilitaires/check'

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
                            else{
                                taille = 28
                                if(Platform.OS=='android'){
                                    iconName = focused ? 'md-cart' : 'md-cart-outline'
                                }
                                else{
                                    iconName = focused ? 'ios-cart' : 'ios-cart-outline'
                                }
                                panier(1)
                                const res = getPanier()
                               
                                
                                return (<View>
                                      <Ionicons name={iconName} size={taille} color={'black'}/>
                                      {res && <View style={styles.notificationBubble} />}
                                    </View>)

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
        <Tab.Screen name = 'Mon Panier' component={Panier} 
                options={{
                    tabBarLabel: '',
                }}/>

        <Tab.Screen name = 'Notifications' component={Notif}
            options = {{
                    tabBarLabel: ''
            }}
        />
    </Tab.Navigator>
  )
}

export default TabNavigator