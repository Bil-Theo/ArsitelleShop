import { View, Text, ScrollView, TextInput, TouchableOpacity, SafeAreaView} from 'react-native';
import { useState } from 'react';
import SvgUri from 'react-native-svg-uri'
import styles  from '../style/signStyle'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import styleLogin from '../style/styles'
import {check_num, check_password, name} from '../utilitaires/check'
import Modal from 'react-native-modal';


const SignupScreen = ({navigation}) => {
  const [message, setMessage] = useState()
  const [nom, setNom] = useState()
  const [prenom, setPrenom] = useState()
  const [tel, setTel] = useState()
  const [adresse, setAdresse] = useState()
  const [password, setPassword] = useState()
  const [pasnew, setNew]  = useState()
  const [droit, setDroit] = useState(false)
  const [confirmationVisible, setConfirmationVisible] = useState(false);


 

  const changePassword = (input)=>{
    setPassword(input)
  }

  const changeNew = (input)=>{

    setNew(input)

  }

  const changeAdresse = (input)=>{
    setAdresse(input)
  }
  
  const changeTel = (input)=>{
    setTel(input)
  }

  const changePrenom = (input)=>{
    setPrenom(input)
  }

  const changeNom = (input)=>{
      setNom(input)
  }

  const signup = ()=>{
      setDroit(true);
      if(!name(nom) || !name(prenom) || nom==null, prenom==null){
        setMessage('Le nom ou prenom doit pas inclure " ou \' ou encore être vide.')
        setDroit(false);
        return;
      }

      if(!name(adresse) || adresse==null){
        setMessage('Votre adresse ne doit pas inclure " ou \' ou encore être vide.')
        setDroit(false);
        return;
      }

      if(!check_num(tel)){
        setMessage('Votre numero  doit être valide et ne pas contenir le +242.')
        setDroit(false);
        return;
      }

      if( pasnew != password){
        setMessage('Les deux mots de passes doivent être le même.')
        setDroit(false);
        return;
      }

      if(!check_password(password)){
        setMessage('Le mot de passe doit avoir une longueur de 5 à 10 et doit contenir que des chiffres et des lettres.')
        setDroit(false);
        return;
      }

      if(droit){
        setConfirmationVisible(true);
      }
      return;

  }

  const final = () => {
    setConfirmationVisible(false);
    const user = {'nom': nom, 'prenom': prenom, 'adresse': adresse, 'tel': tel, 'password': password}
   // console.log(user)
    fetch('http://192.168.8.118:3000/api/auth/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
          })
          .then(response=> response.json())
          .then(data=>{
            //redirection vers navigation
            if(data?.success){
              const success = data.success
              navigation.navigate('Login',{success})
            }
            else{
              setMessage(data.probleme)
            }
          })
          .catch(error=>{
            console.log(error)
          })
  }


  return (
    <SafeAreaView style = {{flex: 1,}}>

        <Modal isVisible={confirmationVisible}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalText}>Voulez-vous confirmer votre inscription sur notre application ?</Text>
              <View style = {styles.modalButtonContainer}>
                  <TouchableOpacity  style={styles.modalButtonConfirm} onPress={final}>
                    <Text style={styles.modalButtonText}>Oui</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.modalButtonCancel} onPress={() => {              
                            setConfirmationVisible(false);
                            setMessage(null);
                            alert('Vous avez refuté la création d\'un compte.')}
                  }>
                    <Text style={styles.modalButtonText}>Non</Text>
                  </TouchableOpacity>
              </View>
            </View>
      </Modal>

        <ScrollView contentContainerStyle ={{flexGrow: 2}}>
          <View style = {{marginTop: 0, marginBottom: '100%'}}>
            <SvgUri
              style = {styles.imgBgd}
              source={require('../img/iconSign.svg')}
            />
            {message &&(<View style = {{justifyContent: 'center', alignItems: 'center'}}><Text style = {{fontFamily: 'Arial',
                  marginTop: '0%',
                  position: 'relative', 
                  color: '#d80000'}}>{message}</Text></View>)}

            <View style = {styles.contenaird}>
                <MaterialIcons name='person' size={20} color='#666'/>
                <TextInput
                  placeholder='Votre nom'
                  autoCapitalize='characters'
                  maxLength={20}
                  value={nom}
                  onChangeText={changeNom}
                  style = {{paddingLeft: '2.5%', width: '100%'}}
                />
            </View>
            
            <View style = {styles.contenaird}>
                <MaterialIcons name='face' size={20} color='#666'/>
                <TextInput
                  placeholder='Votre prenom'
                  maxLength={20}
                  value={prenom}
                  onChangeText={changePrenom}
                  style = {{paddingLeft: '2.5%', width: '100%'}}
                />
            </View>
            <View style = {styles.contenaird}>
                <MaterialIcons name='store' size={20} color='#666'/>
                <TextInput
                  placeholder='Votre adresse (Cas livraison)'
                  onChangeText={changeAdresse}
                  maxLength={40}
                  value = {adresse}
                  style = {{paddingLeft: '2.5%', width: '100%'}}
                />
            </View>
            <View style = {styles.contenaird}>
                <MaterialIcons name='phone' size={20} color='#666'/>
                <TextInput
                  placeholder='exemple: 06 111 11 11'
                  onChangeText={changeTel}
                  value = {tel}
                  style = {{paddingLeft: '2.5%', width: '100%'}}
                  keyboardType='numeric'
                />
            </View>
            <View style = {styles.contenaird}>
                <MaterialIcons name='lock' size={20} color='#666'/>
                <TextInput
                  placeholder='Créer un mot de passe'
                  maxLength={20}
                  value = {password}
                  onChangeText={changePassword}
                  style = {{paddingLeft: '2.5%', width: '80%'}}
                  secureTextEntry = {true}
                />
            </View>
            <View style = {styles.contenaird}>
                <MaterialIcons name='lock' size={20} color='#666'/>
                <TextInput
                  placeholder='Confirmer votre mot de passe'
                  maxLength={20}
                  onChangeText={changeNew}
                  value={pasnew}
                  style = {{paddingLeft: '2.5%', width: '80%'}}
                  secureTextEntry = {true}
                />
            </View>
            <TouchableOpacity style = {styleLogin.button} onPress={signup}>
                <Text style= {{color: 'white', fontWeight: 'bold', marginRight: '5%'}}>s'incrire</Text>
                <MaterialIcons name='person-add' size={30} color='white'/>
            </TouchableOpacity>
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}





export default SignupScreen