import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet , ImageBackground} from 'react-native';
import { Audio } from 'expo-av';
import audioFiles from '../assets/data.js'
import styles from '../style/styles2.js';
export default function Screen2({ route, navigation }) {
  const { tempo, selectedAudio } = route.params; 
  const [countdown, setCountdown] = useState(3);
  const [currentCycle, setCurrentCycle] = useState(0);
  const [metronomeSound, setMetronomeSound] = useState(null);
  const [lessonSound, setLessonSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const originalTempo = 60;

  const selectedFiles = audioFiles[selectedAudio];

  useEffect(() => {
    return () => {
      metronomeSound?.unloadAsync();
      lessonSound?.unloadAsync();
    };
  }, []);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsPlaying(true);
    }
  }, [countdown]);

  useEffect(() => {
    if (isPlaying) {
      playCycle(currentCycle);
    }
  }, [isPlaying, currentCycle]);

  const playCycle = async (cycle) => {
    const fileIndex = Math.floor(cycle / 2);
    const isMetronomeOnly = cycle % 2 === 1;

    if (fileIndex >= selectedFiles.length) {
      setIsPlaying(false);
      return;
    }

    const { metronome, lesson, beats } = selectedFiles[fileIndex];

    try {
      const metronomeAudio = new Audio.Sound();
      await metronomeAudio.loadAsync(metronome);
      setMetronomeSound(metronomeAudio);

      const metronomeRate = tempo / originalTempo;
      await metronomeAudio.setRateAsync(metronomeRate,true);

      let lessonAudio;
      if (!isMetronomeOnly) {
        lessonAudio = new Audio.Sound();
        await lessonAudio.loadAsync(lesson);
        setLessonSound(lessonAudio);

        const lessonRate = tempo / originalTempo;
        await lessonAudio.setRateAsync(lessonRate,true);
      }

      await metronomeAudio.playAsync();
      if (!isMetronomeOnly) {
        await lessonAudio.playAsync();
      }

      const cycleDuration = beats * (60 / tempo) * 1000;

      setTimeout(() => {
        lessonAudio?.stopAsync();
        metronomeAudio.stopAsync();
        const nextCycle=cycle+1;
        setCurrentCycle(nextCycle);
      }, cycleDuration);
      
    } catch (error) {
      console.error("Error playing audio:", error);
    }
  };

  const handleStop = async () => {
    await metronomeSound?.stopAsync();
    await lessonSound?.stopAsync();
    setIsPlaying(false);
    navigation.goBack();
  };
  return (
    <ImageBackground
      source={require('../assets/123.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        {countdown > 0 ? (
          <Text style={styles.countdownText}>Starting in: {countdown}</Text>
        ) : (
          <>
        <Text style={[styles.statusText, { fontSize: 24 }]}>
        {currentCycle >= 8
          ? ` All lessons covered, \nClick stop to go back.`
          : currentCycle % 2 === 0
          ? `Playing Lesson ${Math.floor(currentCycle / 2) + 1}`
          : `Your Turn (Metronome Only)`}
      </Text>
      <View style={{ height: 20 }} />
        <TouchableOpacity style={styles.stopButton} onPress={handleStop}>
          <Text style={[styles.stopButtonText, { fontSize: 18 }]}>Stop</Text>
        </TouchableOpacity>

          </>
        )}
      </View>
    </ImageBackground>
  );
}
