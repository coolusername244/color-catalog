import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Color from 'color';

const ColorDetails = ({ route }) => {
  const { color: name } = route.params;
  const color = Color(name);
  const textColor = { fontSize: 30, color: color.negate().toString() };

  return (
    <View style={[styles.container, { backgroundColor: name }]}>
      <Text style={textColor}>{name}</Text>
      <Text style={textColor}>{color.rgb().toString()}</Text>
      <Text style={textColor}>{color.hsl().toString()}</Text>
      <Text style={textColor}>{color.luminosity()}</Text>
    </View>
  );
};

export default ColorDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
