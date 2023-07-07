import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import styles from './assets/style/styles';
import MyImage from './assets/style/MyImage'

export default function App() {


  const [img, setImg] = useState()
  const [obj, setobj] = useState()

  const createImg = (myImgs)=>{
    const o = myImgs[0]
    setobj(new MyImage(o._id, o.description, o.imageUrl, o.price, o.title))
    //console.log(obj);
        
  }

  const getData = ()=>{ 
    fetch('http://192.168.8.101:3000/api/stuff')
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      setImg(data);
      createImg(img)
      //console.log(data)
    })
    .catch(error => {
      // Gérer les erreurs de requête réseau ici
      console.error('Erreur de requête réseau :', error);
    });

  }

  useEffect(()=>{
    getData()
  }, [])

  return (
    <View style={styles.container}>
      {obj && (
        <View style={styles.contenairImg}>
          <Image source={{ uri: obj.imgUrl }} style={styles.img} />
          <Text style={styles.text}>{obj.title}</Text>
        </View>
      )}
    <TouchableOpacity style = {styles.button} onPress={getData}>
      <Text>Toucher ici</Text>
    </TouchableOpacity>
    </View>
  );
}
