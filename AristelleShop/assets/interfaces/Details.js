import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../style/Styledetails'
import styleButton from '../style/styles'
import { Ionicons } from '@expo/vector-icons'
import { deleteItem, savePanier } from '../utilitaires/check'


const Details = ({route, navigation}) => {
    const   action = route.params.action
    const   item = route.params.item
    const user = route.params.user
    
    const supprimer = (key, itemKey)=>{
        deleteItem(key, itemKey)
        navigation.navigate('Mon Panier')
    }
    //console.log(item)
  return (
    <SafeAreaView style={{flex: 1}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}} style={{height: '100%'}}>
            <View style={styles.contenair}>
                <Image style = {styles.image} source={{uri: item.urlImage}}/>
                <View style={styles.info}>
                    <View style={styles.apercu}>
                        <Text style={styles.textApercu}>Titre</Text>
                    </View>
                    <View style={styles.text}>
                        <Text>{item.title}</Text>
                    </View>
                </View>
                <View style={styles.info}>
                    <View style={styles.apercu}>
                        <Text style={styles.textApercu}>Prix</Text>
                    </View>
                    {item.promo ? (
                        <View style={{flexDirection: 'row', paddingLeft: '10%'}}>
                            <View style={[styles.text, {marginLeft: '12%'}]}>
                                <Text style={{ color: 'red', textDecorationLine: 'line-through', textDecorationColor: 'red'}}>{item.price} FCFA</Text>
                            </View>
                            <View style={[styles.text, {marginLeft: '12%'}]}>
                                <Text>{item.pricePromo} FCFA</Text>
                            </View>
                        </View>
                    ):(
                        <View style={styles.text}>
                            <Text>{item.price} FCFA</Text>
                        </View>
                    )}
                </View>
                <View style={styles.info}>
                    <View style={styles.apercu}>
                        <Text style={styles.textApercu}>Taille</Text>
                    </View> 
                    <View style={styles.text}>
                        <Text>{item.taille}</Text>
                    </View>
                </View>
                <View style={styles.info}>
                    <View style={styles.apercu}>
                        <Text style={styles.textApercu}>description</Text>
                    </View>
                    <View>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                </View>
                {action=='ajout'?(<TouchableOpacity style = {[styleButton.button, {backgroundColor: '#30d165', flex: 1}]} onPress={()=> savePanier(user.user[0].id, item)}>
                      <Text style= {{color: 'white', fontSize: 15,fontWeight: 'bold', marginRight: '5%'}}>Ajouter</Text>
                      <Ionicons name='cart-outline' size={30} color='white'/>
                </TouchableOpacity>):
                (<TouchableOpacity style = {[styleButton.button, {backgroundColor: 'red', flex: 1}]} onPress={()=> supprimer(user.user[0].id, item.id)}>
                      <Text style= {{color: 'white', fontSize: 15,fontWeight: 'bold', marginRight: '5%'}}>supprimer</Text>
                      <Ionicons name='trash-outline' size={30} color='white'/>
                </TouchableOpacity>)}
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Details