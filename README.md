# Man vs Machine: Konnakkol Practice Mode

This project is a React Native mobile application developed using the Expo-CLI framework. The app consists of two screens and is designed to help users practice Konnakkol by alternating between playback of lesson audio and metronome. It allows users to set a tempo, select lesson audio, and synchronize playback seamlessly. Below is an overview of the approach and implementation.

## Project Overview

### Screen 1: Settings and Audio Selection
This screen allows the user to:
- Set the tempo (in beats per minute).
- Select an audio lesson from a pre-defined list.
- Navigate to the next screen to start practicing.

Key Components:
- **`TextInput`**: Accepts the tempo in BPM, validating the input for numerical values.
- **`FlatList`**: Displays the list of available audio lessons. The user can select one item at a time.
- **`TouchableOpacity`**: Handles navigation to the next screen while ensuring an audio file is selected.
- **`LinearGradient`**: Provides a visually appealing background.

### Screen 2: Playback Mode
Key Features:
1. **Countdown Timer**: Provides a 3-second countdown before the session starts.
2. **Alternating Cycles**:
   - Even cycles play the selected lesson audio.
   - Odd cycles play only the metronome.
3. **Tempo Adjustment**:
   - Playback speed is adjusted dynamically based on the user's selected tempo.
4. **Stop Button**: Allows the user to stop playback and return to the first screen.

## Functions in `Screen2.js`

### 1. **`playCycle(cycle)`**
- **Purpose**: Controls the playback for each cycle (lesson or metronome).
- **Parameters**:
  - `cycle`: Current playback cycle (even for lesson audio, odd for metronome-only).
- **Key Steps**:
  1. **Identify Current Cycle**:
     - Determine whether to play both lesson and metronome (even cycles) or metronome-only (odd cycles).
     - Select the appropriate file index from `selectedFiles` based on `cycle / 2`.
  2. **Load and Adjust Audio**:
     - Load lesson and/or metronome audio using Expo’s `Audio.Sound()`.
     - Adjust playback rate (`setRateAsync`) based on the user-defined tempo.
  3. **Playback and Timing**:
     - Start playback for the selected audio.
     - Calculate playback duration based on the number of beats and tempo.
     - Stop playback after the duration and increment the cycle.

---

### 2. **`handleStop()`**
- **Purpose**: Stops all audio playback and navigates back to the previous screen.
- **Key Steps**:
  1. Stop any active audio using `stopAsync()` for both `metronomeSound` and `lessonSound`.
  2. Update the state to stop the playback cycle.
  3. Navigate back to `Screen1`.

---

### 3. **`useEffect` (Countdown Timer)**
- **Purpose**: Implements a 3-second countdown before starting the practice session.
- **Flow**:
  1. Decrease `countdown` by 1 every second.
  2. When `countdown` reaches 0, trigger playback by setting `isPlaying` to `true`.

---

### 4. **`useEffect` (Playback Trigger)**
- **Purpose**: Listens for changes in `isPlaying` and `currentCycle` to initiate playback.
- **Flow**:
  - When `isPlaying` becomes `true`, the `playCycle` function is triggered with the current cycle.
  - Once the current cycle completes, the state is updated to move to the next cycle.

---

### 5. **`useEffect` (Cleanup)**
- **Purpose**: Ensures that audio resources are released when leaving the screen.
- **Flow**:
  - Unloads audio files (`unloadAsync`) for both lesson and metronome sounds during component unmounting.

---


### Supporting Files
- **Audio Files**: Audio data is stored in directory `../assets/audio/` and accessed through `../assets/data.js`.
- **Styles**: Custom styles for both screens are defined in separate files (`styles1.js` and `styles2.js`).
- **Image Assets**: Background images are used to enhance visual appeal.


## How to Run the App
1. Install dependencies:
   ```terminal
   npm install
2. Start the app:
    ```terminal
    npm start
3. Scan QR with expo Go android app or `Press w` in your keyboard to view in web.
