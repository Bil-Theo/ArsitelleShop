import Toast  from 'react-native-root-toast';
import * as Font from 'expo-font';

import { ToastAndroid, Platform } from 'react-native';

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

