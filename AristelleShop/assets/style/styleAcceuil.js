import { StyleSheet, Dimensions } from "react-native";


const {width} = Dimensions.get('window')
const imageLarg = width * 0.95

const styles = StyleSheet.create({
    contenair: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingBottom: '15%'

    },
    image: {
        width: imageLarg,
        height: imageLarg,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
    },
    palette: {
        backgroundColor: 'white',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        width: '71.5%'
    },
    info: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textPrice: {
        color: 'black',
        fontSize: 15,
        textAlign: 'center',
    },
    textpromo: {
        color: 'red',
        fontSize: 15,
        textAlign: 'center',
        textDecorationLine: 'line-through',
        textDecorationColor: 'red',
    },
    action: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: '5%',
        marginTop: '5%',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    details: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#10dfee',
        borderRadius: 5,
        marginRight: '10%',
        paddingLeft: '3%',
        marginLeft: '3%',
        flex: 1,
    },
    achat: {
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#30d165',
        alignItems: 'center',
        borderRadius: 5,
        marginRight: '3%',
    },
})

export default styles;