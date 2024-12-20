import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Ensures the image covers the screen
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  countdownText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  statusText: {
    fontSize: 18,
    marginBottom: 10,
  },
  cycleText: {
    fontSize: 16,
    marginBottom: 20,
  },
  stopButton: {
    backgroundColor: '#FF0000',
    padding: 15,
    borderRadius: 5,
  },
  stopButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default styles;
