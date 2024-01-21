import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorDetails = ({ route }) => {
  const { color } = route.params;
  return (
    <View style={styles.container}>
      <Text>Color Details: {color}</Text>
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
