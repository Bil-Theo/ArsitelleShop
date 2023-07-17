import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from '../style/styleAcceuil'
import { Ionicons } from '@expo/vector-icons'



const Item = ({item})=>{
    const [promotion, setPromotion] = useState(false) 

    setPromotion(item.promo)

    return(
      <View style={styles.contenair}>
        <ImageBackground source={{uri: item.urlImage}} style={styles.imageBack}>
            <View style={styles.info}>
                <Text>{item.title}</Text>
                {promotion ? (
                  (<Text style={styles.textpromo}>{item.price} fcfa</Text>)
                  (<Text style={styles.text}>{item.promoPrice} fcfa</Text>)
                ):(<Text style={styles.text}>{item.price} fcfa</Text>)}
            </View>
        </ImageBackground>
        <View style={styles.action}>
          <TouchableOpacity>
             Details
             <Ionicons name = 'information' size={25} color='white'/>
          </TouchableOpacity>
          <TouchableOpacity>
             Ajouter Panier
             <Ionicons name = 'shopping-cart' size={25} color='white'/>
          </TouchableOpacity>
        </View>
    </View>
    )
  }




export default Item
