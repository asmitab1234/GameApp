import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './App/Screen/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './App/Screen/GameScreen';

export default function App() {
  const [user, setUser] = useState()
  function onPickNumberHandeler(pickNumber) {
    setUser(pickNumber)
  }

  let screen = <StartGameScreen onPickNumber={onPickNumberHandeler} />
  if (user) {
    screen = <GameScreen />
  }
  return (
    <LinearGradient
      colors={['#9C0A47', '#E09711']}
      style={styles.rootScreen}>
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
       {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.25
  }
});
