import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
    },
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      marginBottom: 20,
    },
    label: {
      fontSize: 18,
      marginBottom: 10,
      fontWeight: 'bold',
      color: 'white',
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 20,
      paddingHorizontal: 10,
      backgroundColor: 'white',
    },
    inputError: {
      borderColor: 'red',
    },
    audioItem: {
      padding: 15,
      marginVertical: 5,
      borderRadius: 5,
      backgroundColor: '#a5d6a7',
      borderBottomColor: '#ddd',
      borderBottomWidth: 1,
    },
    selectedItem: {
      backgroundColor: '#dcedc8',
    },
    audioText: {
      fontSize: 16,
      color: '#2e7d32',
    },
    nextButton: {
      marginTop: 20,
      backgroundColor: '#8bc34a',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
    },
    nextButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
  
  export default styles;