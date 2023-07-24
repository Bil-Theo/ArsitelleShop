import {Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../style/styleAcceuil'
import { Ionicons } from '@expo/vector-icons'
import { savePanier,  } from '../utilitaires/check'
import {toast} from '../utilitaires/check'



const Item = ({item, navigation, user})=>{

  const details = ()=>{
    //console.log(item)

    navigation.navigate('Details', {
      'user': user,
      'action': 'ajout',
      'item': item})

  }
  const ajout = ()=>{
    savePanier(user.user[0].id, item)
  }
    return(
      <View style={styles.contenair}>
        <Image source={{uri: item.urlImage}} style={styles.image} resizeMode="contain" />
        <View style = {styles.palette}>
            <View style={styles.info}>
                <Text style={styles.text}>{item.title}</Text>
                  {item.promo ? (
                    <View style={{flexDirection: 'row', paddingTop: '5%'}}>
                      <Text style={[styles.textpromo, {marginRight: '15%'}]}>{item.price}  FCFA</Text>
                      <Text style={styles.textPrice}>{item.pricePromo}  FCFA</Text>
                    </View>
                      ) : (
                        <Text style={[styles.textPrice, {marginTop: '5%'}]}>{item.price}  FCFA</Text>
                      )}
            </View>
            <View style={styles.action}>
                <TouchableOpacity style={styles.details} onPress={details}>
                    <Text style={styles.buttonText}>Détails</Text>
                    <Ionicons name = 'information' size={30} color='white'/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.achat} onPress={()=> ajout()}>
                    <Text style={styles.buttonText}>AJouter</Text>
                    <Ionicons name = 'cart-outline' size={25} color='white'/>
                </TouchableOpacity>
            </View>

        </View>
      </View>
    )
  }




export default Item



