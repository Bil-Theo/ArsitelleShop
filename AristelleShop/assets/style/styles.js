
import {StyleSheet} from 'react-native';

//backgroundColor: '#000000c0',

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    
    contenaird: {
      left: '6%',
      marginTop: '10%',
      position: 'relative',
      flexDirection: 'row',
      borderBottomWidth: 1,
      width: '80%',
      borderColor: '#666',
      borderRadius: 5,
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
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#10dfee',
      padding: 10,
      borderRadius: 10,
      height: '10%',
      justifyContent: 'center',
      width: '50%',
      height: '8%',
      marginLeft: '25%',
      marginTop: 30,
      flexDirection: 'row'
    
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
      fontSize: 25,
      marginTop: '50%',
      position: 'relative',
      left: 50
    },
    backImg: {
      width: '100%',
      height: '1%',
      marginTop: '15%', 
      marginLeft: '20%', 
    },
    header:{
      marginTop: 0,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '5%',
      paddingTop: '1%',
      marginTop: '5%'
      /*
      backgroundColor: '#FFFFFF',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    */
   }
  })

export default styles;