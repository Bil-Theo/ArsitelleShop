import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    contenair: {
        flex: 1,
        paddingLeft: '7%',
        paddingTop: '5%',
        marginBottom: '150%'
    },
    image: {
        height: '75%',
        width: '94%',
        borderRadius: 10,
    },
    description: {
        width: '94%',
        fontSize: 15,
        paddingLeft: '5%',
    },
    apercu: {
        width: '94%',
        marginTop: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '2%',
    },
    textApercu: {
        fontWeight: 'bold',

    },
    info: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: '5%',
        width: '95%',
        paddingBottom: '3%',
    },
    text: {
        alignContent: 'center',
        alignItems: 'center',
    }
})

export default styles