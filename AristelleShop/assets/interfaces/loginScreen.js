import { useState } from 'react';
import { Text, 
          TouchableOpacity, 
          View, TextInput, 
          SafeAreaView, ScrollView ,
          } from 'react-native';
import styles from '../style/styles';
import {check_num, check_password, toast} from '../utilitaires/check';
import SvgUri from 'react-native-svg-uri';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {RootSiblingParent} from 'react-native-root-siblings'




export default function LoginScreen({ navigation, route }) {
  const [password, setPassword] = useState('')
  const [tel, setTel] = useState('')
  const [message, setMessage] = useState()

  const changePassword = (inputext)=>{
    setPassword(inputext);
  }

  const changeTel = (inputext)=>{
    setTel(inputext)
  }
  const user = {'tel': tel, 'password': password}
  const validate = ()=>{
    if( check_num(tel) && check_password(password) ){
         
          fetch('http://192.168.8.118:3000/api/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
          })
          .then(response=> response.json())
          .then(data=>{
            //redirection vers navigation
            console.log(data)
            navigation.navigate('Fonctionnement', {data})
          })
          .catch(error=>{
            setMessage('numero ou mot de passe incorrect!')
          })

    }
    else{
      setMessage('numero ou mot de passe incorrect!')
    }
  }

  if(route.params?.success){console.log(route.params.success)
    toast(route.params.success)
    navigation.setParams({ success: false });
  }

  

  const inscription = ()=>{
    navigation.navigate('Fonctionnement')
  }
 
  const [showPassword, setShowPassword] = useState(true);
  
    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };

  return (
    <RootSiblingParent>

          <SafeAreaView style={{ flex: 1 }}>
                  <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                  <View>
                      <SvgUri
                        style = {styles.backImg}
                        source={require('../img/image.svg')}
                      />
                      
                      <Text style = {styles.text}></Text>

                      {message&& (<View style = {{justifyContent: 'center', alignItems: 'center'}}><Text style = {{
                            marginTop: '10%',
                            position: 'relative', 
                            color: '#d80000'}}>{message}</Text></View>)}

                      <View style = {styles.contenaird}>
                          <MaterialIcons name='phone' size={20} color='#666'/>
                          <TextInput
                            placeholder='06 883 83 43'
                            style = {{paddingLeft: '2.5%', width: '80%'}}
                            keyboardType='numeric'
                            value={tel}
                            onChangeText={changeTel}
                          />
                      </View>
                      <View style = {styles.contenaird}>
                          <MaterialIcons name='lock' size={20} color='#666'/>
                          <TextInput
                            placeholder='Mot de passe'
                            style = {{paddingLeft: '2.5%', width: '80%'}}
                            value={password}
                            secureTextEntry = {showPassword}
                            onChangeText={changePassword}
                          />
                                    
                          <TouchableOpacity onPress={toggleShowPassword} >
                            <MaterialIcons
                              name={showPassword ? 'visibility-off' : 'visibility'}
                              size={24}
                              color="gray"
                            />
                          </TouchableOpacity>
                      </View>
                      <TouchableOpacity style = {styles.button} onPress={validate}>
                          <Text style= {{color: 'white', fontWeight: 'bold', marginRight: '5%'}}>Connexion</Text>
                          <MaterialIcons name={'login'} size={30} color='white'/>
                      </TouchableOpacity>
                      <View style = {{margin: '10%', flexDirection:  'row', justifyContent: 'center', alignItems: 'center'}}>
                          <Text style={{fontWeight: '600'}}>Vous n'avez pas un compte ?  </Text>
                          <TouchableOpacity onPress={inscription}><Text style = {{color: '#10dfee', fontWeight: '700'}}>S'incrire</Text></TouchableOpacity> 
                      </View>   
                  </View>
                  </ScrollView>
              </SafeAreaView>

    </RootSiblingParent>
  );
}
