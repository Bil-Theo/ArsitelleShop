import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    imgBgd: {
        width: '80%',
        marginLeft: '10%', 
        marginTop: 0,
        height: '30%',
        marginBottom: '0%',
    },
    contenaird: {
        marginLeft: '16%',
        marginTop: '10%',
        position: 'relative',
        flexDirection: 'row',
        borderBottomWidth: 1,
        width: '70%',
        borderColor: '#666',
        borderRadius: 5,
        paddingBottom: '2%'
       }
      ,  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  modalButtonConfirm: {
    backgroundColor: '#10dfee',
    borderRadius: 5
  },
  modalButtonCancel: {
    backgroundColor: '#d80000',
    borderRadius: 5
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  toastContainer: {
    height: 60,
    width: 350,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  toastRow: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  toastText: {
    width: "70%",
    padding: 2,
  },
})

export default styles