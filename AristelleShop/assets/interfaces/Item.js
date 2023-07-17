import {Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../style/styleAcceuil'
import { Ionicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'



const Item = ({item})=>{

  const details = ()=>{
    console.log(item)
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
                <TouchableOpacity style={styles.achat}>
                    <Text style={styles.buttonText}>AJouter</Text>
                    <Ionicons name = 'cart-outline' size={25} color='white'/>
                </TouchableOpacity>
            </View>

        </View>
      </View>
    )
  }




export default Item


/*<View style={styles.info}>
            <Text style={styles.text}>{item.title}</Text>
              {item.promo ? (
                <View style={{flexDirection: 'row'}}>
                   <Text style={[styles.textpromo, {marginRight: '15%'}]}>{item.price}  FCFA</Text>
                   <Text style={styles.textPrice}>{item.pricePromo}  FCFA</Text>
                </View>
                  ) : (
                    <Text style={styles.textPrice}>{item.price}  FCFA</Text>
                  )}
        </View>            
        <View style={styles.action}>
          <TouchableOpacity style={styles.details}>
             <Text style={styles.buttonText}>Détails</Text>
             <Ionicons name = 'information' size={30} color='white'/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.achat}>
             <Text style={styles.buttonText}>AJouter au Panier  </Text>
             <MaterialIcons name = 'shopping-cart' size={25} color='white'/>
          </TouchableOpacity>
        </View>*/
