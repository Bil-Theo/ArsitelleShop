import Toast  from 'react-native-root-toast';
import { ToastAndroid, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'


let val;

export const getPanier = ()=>{
  return val
}

export const check_num = (num)=>{
    const expression = /^0[1-9]\d{7}$/
    return expression.test(num)
}

export const check_password = (password)=>{
    const expression = /^(?=.*[a-zA-z])(?=.*[0-9]).{6,}$/

    return expression.test(password)
}

export const name =  (name)=>{
    const regex = /^[^'"]*$/;
    return regex.test(name)
}
export const toast = (message)=>{
    if(Platform.OS === 'android'){
        ToastAndroid.show(message, ToastAndroid.SHORT);
    }
    else{
      let toast = Toast.show(message, {
        duration: Toast.durations.LONG,
        position: 0,
        animation: true
      });
    }
}

export const panier = async(key)=>{
  let valeurEnChaine;
  try{
    const stringKey = key.toString();
    console.log('ici:'+ stringKey)
    valeurEnChaine = await AsyncStorage.getItem('key_panier' + stringKey);
  }catch(e){
    console.log('Erreur survenu: '+e)
  }
  val = valeurEnChaine
}

export const savePanier = async (key, item) => {
  try {
    const stringKey = key.toString();
    const valeurEnChaine = await AsyncStorage.getItem('key_panier' + stringKey);

    if (valeurEnChaine) {
      const objetExistant = JSON.parse(valeurEnChaine);
      if ('item' + item.id in objetExistant) {
        alert('Article existe déjà dans votre panier.')
      } else {
        objetExistant['item' + item.id] = item;
        const nouvelObjetEnChaine = JSON.stringify(objetExistant);
        await AsyncStorage.setItem('key_panier' + stringKey, nouvelObjetEnChaine);
        toast('Article ajouté dans le panier.')
      }
    } else {
      const nouvelObjet = { ['item' + item.id]: item };
      const nouvelObjetEnChaine = JSON.stringify(nouvelObjet);
      await AsyncStorage.setItem('key_panier'+stringKey, nouvelObjetEnChaine)
      toast('Article ajouté dans le panier.')
    }
  } catch (error) {
    alert('Une erreur est survenue :,(')
  }
}

export const viderPanier = async(key)=>{
  try{
    AsyncStorage.removeItem('key_panier'+key.toString())
  }catch(e){
    console.log('Erreur de suppression')
  }
}

export const deleteItem =  async(key, itemKey)=>{
  panier(key)
  const items = getPanier()
  let sup =JSON.parse(items)
  console.log('Avant')
  console.log(sup)
  delete sup['item'+itemKey]
  console.log('Apres')
  console.log(sup)

  if(sup=={}){
    viderPanier(key)
  }
  else{
    try{
      const chaine = JSON.stringify(sup)
      await AsyncStorage.setItem('key_panier'+key.toString(), chaine)
    }catch(e){
      console.log('erreur survenu leors de la suppression.')
    }
  }
  
}
