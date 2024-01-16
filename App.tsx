import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

type ColorButtonProps = {
  backgroundColor: string;
  onPress: (arg0: string) => void;
};

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('blue');

  const ColorButton: React.FC<ColorButtonProps> = ({
    backgroundColor,
    onPress,
  }) => {
    return (
      <TouchableHighlight
        style={styles.button}
        onPress={() => onPress(backgroundColor)}
        underlayColor="orange"
      >
        <View style={styles.row}>
          <View style={[styles.sample, { backgroundColor }]} />
          <Text style={styles.buttonText}>{backgroundColor}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <ColorButton backgroundColor="red" onPress={setBackgroundColor} />
      <ColorButton backgroundColor="green" onPress={setBackgroundColor} />
      <ColorButton backgroundColor="blue" onPress={setBackgroundColor} />
      <ColorButton backgroundColor="yellow" onPress={setBackgroundColor} />
      <ColorButton backgroundColor="purple" onPress={setBackgroundColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  buttonText: {
    fontSize: 30,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sample: {
    height: 20,
    width: 20,
    margin: 5,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});
