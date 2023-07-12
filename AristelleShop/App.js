import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, Image, ImageBackground, TextInput, Button, SafeAreaView } from 'react-native';
import styles from './assets/style/styles';
import {check_num, check_password} from './assets/utilitaires/check';
import SvgUri from 'react-native-svg-uri';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


export default function App() {

  const [password, setPassword] = useState('')
  const [tel, setTel] = useState('')
  const [message, setMessage] = useState()

  const changePassword = (inputext)=>{
    setPassword(inputext);
  }

  const changeTel = (inputext)=>{
    setTel(inputext)
  }
  
  const validate = ()=>{
    if(true){

          const user = {'tel': tel, 'password': password}
          fetch('http://192.168.8.118:3000/api/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
          })
          .then(response=> response.json())
          .then(data=>{
            console.log(data)
          })
          .catch(error=>{
            console.log(error)
          })

    }
    else{
      setMessage('numero ou mot de passe incorrect!')
    }
  }

  const inscription = ()=>{
    console.log("votre inscription reussie")
  }
 
  const [showPassword, setShowPassword] = useState(false);
  
    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };

  return (
    <SafeAreaView>
        <View>
            <SvgUri
              style = {styles.backImg}
              source={require('./assets/img/image.svg')}
            />
            
            <Text style = {styles.text}>Login</Text>

            {message&& (<View style = {{justifyContent: 'center', alignItems: 'center'}}><Text style = {{fontFamily: 'Arial',
                  marginTop: '10%',
                  position: 'relative', 
                  color: '#d80000'}}>{message}</Text></View>)}

            <View style = {styles.contenaird}>
                <MaterialIcons name='phone' size={20} color='#666'/>
                <TextInput
                  placeholder='06 883 83 43'
                  style = {{paddingLeft: '2.5%'}}
                  keyboardType='numeric'
                  value={tel}
                  onChangeText={changeTel}
                />
            </View>
            <View style = {styles.contenaird}>
                <MaterialIcons name='lock' size={20} color='#666'/>
                <TextInput
                  placeholder='Mot de passe'
                  style = {{paddingLeft: '2.5%'}}
                  value={password}
                  secureTextEntry = {showPassword}
                  onChangeText={changePassword}
                />
                          
                <TouchableOpacity onPress={toggleShowPassword} style={{marginLeft: '55%',}}>
                  <MaterialIcons
                    name={showPassword ? 'visibility-off' : 'visibility'}
                    size={24}
                    color="gray"
                  />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style = {styles.button} onPress={validate}>
                <Text style= {{color: 'white', fontWeight: 'bold'}}>Connexion</Text>
            </TouchableOpacity>
            <View style = {{margin: '10%', flexDirection:  'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontWeight: '600'}}>Vous n'avez pas un compte ?  </Text>
                <TouchableOpacity onPress={inscription}><Text style = {{color: '#10dfee', fontWeight: '700'}}>S'incrire</Text></TouchableOpacity> 
            </View>   
        </View>
    </SafeAreaView>
  );
}
