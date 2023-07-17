import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    contenair: {
        height: '55%',
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    imageBack: {
        height: '80%',
        flex: 1,
        borderRadius: 10
    } ,

    info: {
        backgroundColor: '#000000c0',
        position: 'absolute',
        bottom: '1%', 
        width: '100%',
        paddingBottom: '1%'
    }, 
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textpromo: {
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationLine: 'line-through',
        textDecorationColor: 'red',
    },
    action: {
        height: '20%',
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'row',
    },
    details: {
        height: '10%',
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    achat: {
        height: '10%',
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        color: ''
    },
})

export default styles;