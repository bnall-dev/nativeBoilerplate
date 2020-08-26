import React from 'react';
import { View, Text } from 'react-native';
import { ViewConstructor, ButtonConstructor } from './Constructor.js';
import globalStyles from '../styles/globalStyles.js';

const Home = ({ activeView, setActivePopup, setActiveView }) => {
  const body = (
    <View style={globalStyles.view}>
      <Text>HOME</Text>
      <ButtonConstructor
        buttonStyle={globalStyles.button}
        buttonTextStyle={globalStyles.buttonText}
        label="OPTIONS"
        onPress={() => setActivePopup('OPTIONS')}
      />
      <ButtonConstructor
        buttonStyle={globalStyles.button}
        buttonTextStyle={globalStyles.buttonText}
        label="ABOUT"
        onPress={() => setActiveView('ABOUT')}
      />
    </View>
  );
  return activeView === 'HOME' && <ViewConstructor content={body} />;
};

export default Home;
