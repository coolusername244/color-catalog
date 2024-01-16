import React, { useState, useRef, FC } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

type ColorFormProps = {
  onNewColor: (arg0: string) => void;
};

const ColorForm: FC<ColorFormProps> = ({ onNewColor }) => {
  const [inputValue, setInputValue] = useState('');
  const input = useRef<TextInput>(null);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.txtInput}
        autoCapitalize="none"
        ref={input}
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Enter a color"
      />
      <Button
        title="add"
        onPress={() => {
          input.current?.blur();
          onNewColor(inputValue);
          setInputValue('');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtInput: {
    flex: 1,
    borderWidth: 2,
    fontSize: 20,
    margin: 5,
    borderRadius: 5,
    padding: 5,
  },
});

export default ColorForm;
