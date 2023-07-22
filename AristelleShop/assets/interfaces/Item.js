import {Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../style/styleAcceuil'
import { Ionicons } from '@expo/vector-icons'
import { savePanier,  } from '../utilitaires/check'
import {toast} from '../utilitaires/check'



const Item = ({item, navigation})=>{

  const details = ()=>{
    //console.log(item)

    navigation.navigate('Details', {item})

  }
  const ajout = ()=>{
    savePanier(1, item)
    /*if(status==0){
      toast('L\'article a été ajouté dans le panier avec succes.')
    }
    else if(status==-1){
      console.log(-1)
      alert('\'article existe déjà Ldans votre payer, vous ne pouvez plus ajouter.')
    }
    else{
      console.log(1)
      alert('Une erreur est survenue lors de l\'ajout de l\'article dans votre panier :,(')
    }*/
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
