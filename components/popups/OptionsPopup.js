import React, { useState } from 'react';
import { View, Text } from 'react-native';
import {
  ViewConstructor,
  ButtonConstructor,
  PopupConstructor,
} from '../Constructor.js';
import globalStyles from '../../styles/globalStyles.js';

const OptionsPopup = ({ activeView, activePopup, setActivePopup }) => {
  const body = (
    <View style={globalStyles.popup}>
      <Text>OPTIONS</Text>

      <ButtonConstructor
        buttonStyle={globalStyles.button}
        buttonTextStyle={globalStyles.buttonText}
        label="CANCEL"
        onPress={() => setActivePopup(null)}
      />
    </View>
  );
  return activePopup === 'OPTIONS' && <PopupConstructor content={body} />;
};

export default OptionsPopup;
