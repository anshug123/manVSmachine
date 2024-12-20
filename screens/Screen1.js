import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../style/styles1';

const availableAudios = [
  "1. Tha Dhi Thom Nam",
  "2. Tha Tha Dhi Dhi",
  "3. Tha Tha Tha Dhi Dhi Dhi",
  "4. Tha Tha Tha Tha Dhi Dhi Dhi Dhi",
  "5. Tha Dhi Thom Nam Nam Thom Dhi Tha",
  "6. Tha Tha Dhi Dhi Thom Thom",
  "7. Tha Tha Tha Dhi Dhi Dhi Thom Thom Thom",
  "8. Tha Tha Tha Tha Dhi Dhi Dhi Dhi",
];

export default function Screen1({ navigation }) {
  const [tempo, setTempo] = useState("60");
  const [selectedAudio, setSelectedAudio] = useState(null);

  const handleTempoChange = (text) => {
    if (!isNaN(Number(text))) {
      setTempo(text); // Update tempo only if valid
    } else {
      alert("Please enter a valid number!");
    }
  };

  const handleNextPress = () => {
    if (selectedAudio) {
      navigation.navigate('Screen2', { tempo, selectedAudio });
    } else {
      alert('Please select an audio!');
    }
  };

  return (
    <LinearGradient colors={["#d4e157", "#c5e1a5", "#a5d6a7"]} style={styles.container}>
      <Text style={styles.header}>Konnakkol Practice</Text>

      <Text style={styles.label}>Set Tempo (BPM):</Text>
      <TextInput
        style={[styles.input, isNaN(Number(tempo)) && styles.inputError]}
        keyboardType="numeric"
        value={tempo}
        onChangeText={handleTempoChange}
        placeholder="Enter Tempo"
      />

      <Text style={styles.label}>Select an Audio:</Text>
      <FlatList
        data={availableAudios}
        keyExtractor={(item, index) => index.toString()}
        style={{ maxHeight: 200 }}
        showsVerticalScrollIndicator={true}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.audioItem, selectedAudio === item && styles.selectedItem]}
            onPress={() => setSelectedAudio(item)}
          >
            <Text style={styles.audioText}>{item}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
