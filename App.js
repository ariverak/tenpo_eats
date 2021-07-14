import React from 'react';
import {useColorScheme} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/routes/MainStack';
import 'react-native-gesture-handler';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <NavigationContainer>
      <MainStack />
      {/* Rest of your app code */}
    </NavigationContainer>
  );
};

export default App;
