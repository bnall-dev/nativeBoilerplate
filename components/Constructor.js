import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';

const ViewConstructor = (props) => {
  return props.content;
};

const PopupConstructor = (props) => {
  return props.content;
};

const ButtonConstructor = (props) => {
  return (
    <TouchableHighlight style={props.buttonStyle} onPress={props.onPress}>
      <Text style={props.buttonTextStyle}>{props.label}</Text>
    </TouchableHighlight>
  );
};

export { ViewConstructor, ButtonConstructor, PopupConstructor };
