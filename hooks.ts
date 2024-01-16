import { useEffect, useState } from 'react';
import { Color } from './types';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useColors = () => {
  const [colors, setColors] = useState<Color[]>([]);

  const loadColors = async () => {
    const colorData = await AsyncStorage.getItem('@ColorListStore:Colors');
    if (colorData) {
      const colors: Color[] = JSON.parse(colorData);
      setColors(colors);
    }
  };

  useEffect(() => {
    if (colors.length) return;
    loadColors();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('@ColorListStore:Colors', JSON.stringify(colors));
  }, [colors]);

  const addColor = (color: string) => {
    const newColor: Color = { id: uuidv4(), color };
    setColors([newColor, ...colors]);
  };
  return { colors, addColor };
};

export default useColors;
