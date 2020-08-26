import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { ButtonConstructor } from './components/Constructor';
import Home from './components/Home';
import About from './components/About';
import OptionsPopup from './components/popups/OptionsPopup';

const testButton = <ButtonConstructor label="TEST" />;

export default function App() {
  const [activeView, setActiveView] = useState('HOME');
  const [activePopup, setActivePopup] = useState(null);

  const togglePopup = (popup) => {
    setActivePopup(popup);
  };

  return (
    <View style={styles.root}>
      <Text>ROOT</Text>
      <Home
        activeView={activeView}
        setActiveView={setActiveView}
        activePopup={activePopup}
        setActivePopup={setActivePopup}
      />
      <About
        setActiveView={setActiveView}
        activeView={activeView}
        activePopup={activePopup}
        setActivePopup={setActivePopup}
      />
      <OptionsPopup activePopup={activePopup} setActivePopup={setActivePopup} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
