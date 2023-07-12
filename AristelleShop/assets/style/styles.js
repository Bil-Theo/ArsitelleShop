
import {StyleSheet} from 'react-native';

//backgroundColor: '#000000c0',

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    
    contenaird: {
      left: '10%',
      marginTop: '10%',
      position: 'relative',
      flexDirection: 'row',
      borderBottomWidth: 1,
      width: '80%',
      borderColor: '#666',
      paddingBottom: '2%'
     }
    ,

    entrer:{
        width: '100%',
        marginTop: '18%',
    },
    erreur:{
        color: 'red',
        flex: 1,
        margin: '5%',  
        fontSize: '50px',
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#10dfee',
      padding: 10,
      borderRadius: 10,
      height: '10%',
      justifyContent: 'center',
      width: '80%',
      marginLeft: '10%',
      marginTop: 30,
    
    },
    textput: {
      backgroundColor : '#ffffff',
      color: '#272525', 
      width: '70%',
      padding: '2%',
      marginBottom: '10%',
      position: 'relative',
      left: '10%'
    },
    contenairImg: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '75%',
      resizeMode: 'cover',
    },
    text: {
      fontFamily: 'Arial',
      fontSize: '25',
      marginTop: '50%',
      position: 'relative',
      left: 50
    },
    backImg: {
      width: '100%',
      height: '1%',
      marginTop: '15%', 
      marginLeft: '25%', 
    }
  })

export default styles;