import React from 'react';
import ColorList from './components/ColorList';
import ColorDetails from './components/ColorDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ title: 'Color List' }}
          component={ColorList}
        />
        <Stack.Screen name="Details" component={ColorDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
