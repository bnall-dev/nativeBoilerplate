import React from 'react';
import { View, Text } from 'react-native';
import { ViewConstructor, ButtonConstructor } from './Constructor.js';
import globalStyles from '../styles/globalStyles.js';

const About = ({ activeView, setActivePopup, setActiveView }) => {
  const body = (
    <View style={globalStyles.view}>
      <Text>ABOUT</Text>
      <ButtonConstructor
        buttonStyle={globalStyles.button}
        buttonTextStyle={globalStyles.buttonText}
        label="MENU"
        onPress={() => setActiveView('HOME')}
      />
    </View>
  );
  return activeView === 'ABOUT' && <ViewConstructor content={body} />;
};

export default About;
