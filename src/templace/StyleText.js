import React from 'react';
import { Text, StyleSheet } from 'react-native';

import ColorVersion from '../styles/color';

function applyGeneralStyles({
  style,
  bold,
  white,
  color,
  size,
}) {
  return [
    style && style,
    bold && styles.bold,
    white && styles.white,
    color && { color },
    size && { fontSize: size },
  ];
}

export const  TextRN=({ text,...props})=> {
  const finalStyle=[
    styles.white,
    styles.textRn
  ]

  return <Text  style={finalStyle} {...props} >{text}</Text>;
}

export function Title(props) {
  const finalStyle = [
    styles.title,
    ...applyGeneralStyles(props),
  ];

  return <Text {...props} style={finalStyle} />;
}

export function Caption(props) {
  const finalStyle = [
    styles.caption,
    ...applyGeneralStyles(props),
  ];

  return <Text {...props} style={finalStyle} />;
}

const styles = StyleSheet.create({
  textRn:{
    fontSize:16
  },
  title: {
    fontSize: 20,
  },
  caption: {
    fontSize: 13,
  },
  white: {
    color: ColorVersion.white,
  },
});
