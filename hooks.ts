import { useState } from 'react';
import { Color } from './types';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const useColors = () => {
  const [colors, setColors] = useState<Color[]>([]);
  const addColor = (color: string) => {
    const newColor: Color = { id: uuidv4(), color };
    setColors([newColor, ...colors]);
  };
  return { colors, addColor };
};

export default useColors;
