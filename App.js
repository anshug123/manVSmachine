// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './screens/Screen1'; // Import Screen1
import Screen2 from './screens/Screen2'; // Import Screen2

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen name="Screen1" component={Screen1} options={{ title: 'Man Vs Machine' }} />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{
            title: 'Playback Mode',
            headerLeft: () => null, // Removes the back button
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
