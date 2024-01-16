import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ColorButton from './components/ColorButton';
import ColorForm from './components/ColorForm';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

type Color = {
  id: string;
  color: string;
};

const useColors = () => {
  const [colors, setColors] = useState<Color[]>([]);
  const addColor = (color: string) => {
    const newColor: Color = { id: uuidv4(), color };
    setColors([newColor, ...colors]);
  };
  return { colors, addColor };
};

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('blue');
  const { colors, addColor } = useColors();
  return (
    <>
      <ColorForm onNewColor={addColor} />
      <FlatList
        style={[styles.container, { backgroundColor }]}
        data={colors}
        renderItem={({ item }) => {
          return (
            <ColorButton
              key={item.id}
              backgroundColor={item.color}
              onPress={setBackgroundColor}
            />
          );
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
});
